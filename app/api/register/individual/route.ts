import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendRegistrationEmail } from '@/lib/email'
import { nanoid } from 'nanoid'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    console.log('Registration data received:', { ...data, phone: data.phone?.substring(0, 3) + '***' })
    
    // Generate registration ID
    const registrationId = `SPL${nanoid(8).toUpperCase()}`
    
    // Create user for individual player
    const user = await prisma.user.create({
      data: {
        email: `player_${nanoid(8)}@spl.com`,
        password: 'temp',
        role: 'PUBLIC',
        name: data.name,
        phone: data.phone,
        district: data.district
      }
    })

    // Create individual player
    const player = await prisma.player.create({
      data: {
        name: data.name,
        fatherName: data.fatherName || '',
        dateOfBirth: new Date(data.dateOfBirth),
        phone: data.phone,
        alternatePhone: data.alternatePhone || '',
        aadhaarNo: nanoid(12),
        schoolCollege: data.schoolCollege,
        district: data.district,
        role: data.role || 'BATSMAN',
        position: data.position || '',
        experience: data.experience || 'NONE',
        isIndividual: true,
        teamAssigned: false,
        createdById: user.id
      }
    })

    // Send registration confirmation email
    try {
      await sendRegistrationEmail(
        data.email,
        registrationId,
        undefined,
        data.name
      )
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
    }

    return NextResponse.json({ 
      success: true, 
      playerId: player.id,
      userId: user.id,
      registrationId,
      paymentRequired: true,
      amount: 1000,
      email: data.email,
      phone: data.phone,
      name: data.name
    })
  } catch (error: any) {
    console.error('Individual registration error:', error)
    return NextResponse.json(
      { 
        error: 'Registration failed',
        message: error.message || 'Unknown error',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    )
  }
}