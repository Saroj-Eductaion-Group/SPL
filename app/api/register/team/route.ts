import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendRegistrationEmail } from '@/lib/email'
import { nanoid } from 'nanoid'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Generate unique registration ID
    const registrationId = `SPL${nanoid(8).toUpperCase()}`
    
    // Create team
    const team = await prisma.team.create({
      data: {
        name: data.teamName,
        district: data.district,
        schoolCollege: data.schoolCollege,
        coachName: data.coachName,
        coachPhone: data.coachPhone,
        managerName: data.managerName,
        managerPhone: data.managerPhone,
        registrationId,
        createdBy: {
          create: {
            email: `team_${registrationId}@spl.com`,
            password: 'temp', // Will be updated later
            role: 'PUBLIC'
          }
        }
      }
    })

    // Create players
    for (const playerData of data.players) {
      if (playerData.name && playerData.dateOfBirth && playerData.phone && playerData.aadhaarNo) {
        await prisma.player.create({
          data: {
            name: playerData.name,
            dateOfBirth: new Date(playerData.dateOfBirth),
            phone: playerData.phone,
            aadhaarNo: playerData.aadhaarNo,
            schoolCollege: data.schoolCollege,
            district: data.district,
            role: 'BATSMAN', // Default, can be updated later
            teamId: team.id,
            createdById: team.createdById
          }
        })
      }
    }

    // Create payment record
    await prisma.payment.create({
      data: {
        amount: 11000,
        teamId: team.id,
        status: 'PENDING'
      }
    })

    // Send registration confirmation email
    try {
      await sendRegistrationEmail(
        data.contactEmail,
        registrationId,
        data.teamName
      )
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
    }

    return NextResponse.json({ 
      success: true, 
      teamId: team.id,
      registrationId: team.registrationId,
      paymentRequired: true,
      amount: 11000,
      email: data.contactEmail,
      phone: data.contactMobile,
      name: data.teamName
    })
  } catch (error) {
    console.error('Team registration error:', error)
    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 500 }
    )
  }
}