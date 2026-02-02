import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, teamId, playerId } = await request.json()

    // Mock payment verification (in production, verify signature with Razorpay)
    const isValid = true

    if (isValid) {
      if (teamId) {
        await prisma.payment.updateMany({
          where: { teamId },
          data: { 
            status: 'SUCCESS',
            razorpayId: razorpay_payment_id,
            transactionId: razorpay_order_id
          }
        })
      }

      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: 'Payment verification failed' }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 })
  }
}