import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  return NextResponse.json({ 
    message: 'Easebuzz Webhook Endpoint',
    status: 'active',
    methods: ['POST'],
    note: 'This endpoint receives payment callbacks from Easebuzz'
  });
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body (Easebuzz sends form data or JSON)
    const contentType = request.headers.get('content-type');
    let data: any;

    if (contentType?.includes('application/json')) {
      data = await request.json();
    } else {
      const formData = await request.formData();
      data = Object.fromEntries(formData);
    }

    const {
      txnid,
      amount,
      status,
      hash,
      udf1: registrationId,
      udf2: registrationType,
      udf3 = '',
      udf4 = '',
      udf5 = '',
      email,
      firstname,
      productinfo,
      easepayid
    } = data;

    // Verify hash signature
    const salt = process.env.EASEBUZZ_SALT!;
    const key = process.env.EASEBUZZ_KEY!;
    
    const hashString = `${salt}|${status}|||||||||||${udf5}|${udf4}|${udf3}|${udf2}|${udf1}|${email}|${firstname}|${productinfo}|${amount}|${txnid}|${key}`;
    const generatedHash = crypto.createHash('sha512').update(hashString).digest('hex');

    if (generatedHash !== hash) {
      console.error('Hash verification failed');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    // Update payment status in database
    if (status === 'success') {
      // Update based on registration type
      if (registrationType === 'team') {
        await prisma.team.updateMany({
          where: { registrationId },
          data: { 
            paymentStatus: 'COMPLETED',
            status: 'PENDING_APPROVAL'
          }
        });
      } else if (registrationType === 'individual') {
        await prisma.player.updateMany({
          where: { id: registrationId },
          data: { 
            paymentStatus: 'COMPLETED'
          }
        });
      }

      // Create payment record
      await prisma.payment.create({
        data: {
          amount: parseFloat(amount),
          status: 'COMPLETED',
          transactionId: easepayid || txnid,
          paymentMethod: 'EASEBUZZ'
        }
      });
    } else {
      // Handle failed payment
      if (registrationType === 'team') {
        await prisma.team.updateMany({
          where: { registrationId },
          data: { paymentStatus: 'FAILED' }
        });
      } else if (registrationType === 'individual') {
        await prisma.player.updateMany({
          where: { id: registrationId },
          data: { paymentStatus: 'FAILED' }
        });
      }
    }

    // Return 200 OK within 5 seconds
    return NextResponse.json({ 
      success: true,
      message: 'Webhook processed successfully',
      txnid,
      status
    }, { status: 200 });

  } catch (error) {
    console.error('Webhook error:', error);
    // Still return 200 to prevent Easebuzz retries
    return NextResponse.json({ 
      success: false,
      error: 'Processing error' 
    }, { status: 200 });
  }
}