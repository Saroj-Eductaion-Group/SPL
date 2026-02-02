import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { teamId, status } = await request.json()

    await prisma.team.update({
      where: { id: teamId },
      data: { status }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update team status' }, { status: 500 })
  }
}