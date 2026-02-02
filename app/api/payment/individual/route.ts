import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'Player ID required' }, { status: 400 })
    }

    const player = await prisma.player.findUnique({
      where: { id },
      include: { createdBy: true }
    })

    if (!player) {
      return NextResponse.json({ error: 'Player not found' }, { status: 404 })
    }

    return NextResponse.json({
      name: player.name,
      district: player.district,
      amount: 1000,
      email: player.createdBy.email,
      phone: player.phone
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load payment data' }, { status: 500 })
  }
}