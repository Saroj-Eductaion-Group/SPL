import { NextRequest, NextResponse } from 'next/server';
import { createEasebuzzPayment, generateEasebuzzHash } from '@/lib/easebuzz';

export async function POST(request: NextRequest) {
  try {
    const { registrationId, amount, email, phone, name, registrationType } = await request.json();

    // Validate inputs
    if (!registrationId || !amount || !email || !phone || !name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const paymentData = createEasebuzzPayment(
      registrationId,
      amount,
      email,
      phone,
      name,
      registrationType
    );

    const hash = generateEasebuzzHash(paymentData);

    // Prepare data for Easebuzz API
    const easebuzzPayload = {
      key: process.env.EASEBUZZ_KEY,
      txnid: paymentData.txnid,
      amount: paymentData.amount,
      productinfo: paymentData.productinfo,
      firstname: paymentData.firstname,
      email: paymentData.email,
      phone: paymentData.phone,
      surl: paymentData.surl,
      furl: paymentData.furl,
      udf1: paymentData.udf1 || '',
      udf2: paymentData.udf2 || '',
      udf3: '',
      udf4: '',
      udf5: '',
      hash,
    };

    // Debug log
    console.log('Easebuzz Payload:', {
      key: easebuzzPayload.key,
      txnid: easebuzzPayload.txnid,
      amount: easebuzzPayload.amount,
      email: easebuzzPayload.email,
      phone: easebuzzPayload.phone,
      hash: hash.substring(0, 20) + '...'
    });

    // Call Easebuzz initiate payment API
    const easebuzzResponse = await fetch('https://testpay.easebuzz.in/payment/initiateLink', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(easebuzzPayload as any).toString()
    });

    const result = await easebuzzResponse.json();
    console.log('Easebuzz Response:', result);

    if (result.status === 1 && result.data) {
      return NextResponse.json({
        success: true,
        paymentUrl: result.data,
        txnid: paymentData.txnid
      });
    } else {
      console.error('Easebuzz API error:', result);
      return NextResponse.json(
        { 
          error: result.error_desc || 'Payment initiation failed',
          details: result
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Payment initiation error:', error);
    return NextResponse.json(
      { error: 'Payment initiation failed' },
      { status: 500 }
    );
  }
}