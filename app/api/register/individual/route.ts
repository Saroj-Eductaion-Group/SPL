import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendRegistrationEmail } from '@/lib/email'
import { nanoid } from 'nanoid'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Generate registration ID
    const registrationId = `SPL${nanoid(8).toUpperCase()}`
    
    // Create user for individual player
    const user = await prisma.user.create({
      data: {
        email: `player_${nanoid(8)}@spl.com`,
        password: 'temp', // Will be updated later
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
        fatherName: data.fatherName,
        dateOfBirth: new Date(data.dateOfBirth),
        phone: data.phone,
        alternatePhone: data.alternatePhone,
        aadhaarNo: nanoid(12), // Temporary, will be updated with actual Aadhaar
        schoolCollege: data.schoolCollege,
        district: data.district,
        role: data.role,
        position: data.position,
        experience: data.experience,
        isIndividual: true,
        teamAssigned: false,
        createdById: user.id
      }
    })

    // Send registration confirmation email
    try {
      await sendRegistrationEmail(
        data.contactEmail,
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
      registrationId
    })
  } catch (error) {
    console.error('Individual registration error:', error)
    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 500 }
    )
  }
}