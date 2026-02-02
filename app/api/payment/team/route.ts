import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'Team ID required' }, { status: 400 })
    }

    const team = await prisma.team.findUnique({
      where: { id },
      include: { createdBy: true }
    })

    if (!team) {
      return NextResponse.json({ error: 'Team not found' }, { status: 404 })
    }

    return NextResponse.json({
      name: team.name,
      district: team.district,
      registrationId: team.registrationId,
      amount: 11000,
      email: team.createdBy.email,
      phone: team.createdBy.phone
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load payment data' }, { status: 500 })
  }
}