import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const totalTeams = await prisma.team.count()
    const totalPlayers = await prisma.player.count()
    const pendingApprovals = await prisma.team.count({ where: { status: 'PENDING' } })
    const approvedTeams = await prisma.team.count({ where: { status: 'APPROVED' } })
    const rejectedTeams = await prisma.team.count({ where: { status: 'REJECTED' } })

    return NextResponse.json({
      totalTeams,
      totalPlayers,
      totalPayments: totalTeams * 11000,
      pendingApprovals,
      approvedTeams,
      rejectedTeams
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load data' }, { status: 500 })
  }
}