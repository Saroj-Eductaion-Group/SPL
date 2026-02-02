import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Check if admin user exists, if not create default admin
    let admin = await prisma.user.findUnique({
      where: { email }
    })

    if (!admin && email === 'admin@spl.com') {
      // Create default admin user
      const hashedPassword = await bcrypt.hash('admin123', 10)
      admin = await prisma.user.create({
        data: {
          email: 'admin@spl.com',
          password: hashedPassword,
          role: 'ADMIN',
          name: 'SPL Administrator'
        }
      })
    }

    if (!admin) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, admin.password)
    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Check if user is admin
    if (admin.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Access denied. Admin privileges required.' },
        { status: 403 }
      )
    }

    return NextResponse.json({
      success: true,
      token: 'admin-token-' + admin.id,
      user: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        role: admin.role
      }
    })
  } catch (error) {
    console.error('Admin login error:', error)
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    )
  }
}