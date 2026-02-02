import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const players = await prisma.player.findMany({
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(players)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load players' }, { status: 500 })
  }
}