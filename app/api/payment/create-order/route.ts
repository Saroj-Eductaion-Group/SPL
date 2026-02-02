import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { amount, teamId, playerId } = await request.json()

    // Mock Razorpay order creation
    const order = {
      id: 'order_' + Math.random().toString(36).substr(2, 9),
      amount: amount * 100, // Razorpay expects amount in paise
      currency: 'INR',
      status: 'created'
    }

    return NextResponse.json(order)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
  }
}