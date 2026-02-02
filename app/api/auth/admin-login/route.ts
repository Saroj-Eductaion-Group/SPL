import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Create default admin if doesn't exist
    if (email === 'admin@spl.com') {
      const existingAdmin = await prisma.user.findUnique({ where: { email } })
      
      if (!existingAdmin) {
        const hashedPassword = await bcrypt.hash('admin123', 10)
        await prisma.user.create({
          data: {
            email: 'admin@spl.com',
            password: hashedPassword,
            role: 'ADMIN',
            name: 'SPL Administrator'
          }
        })
      }
    }

    const admin = await prisma.user.findUnique({ where: { email } })
    
    if (!admin || admin.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const isValid = await bcrypt.compare(password, admin.password)
    if (!isValid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    return NextResponse.json({
      success: true,
      token: 'admin-token-' + admin.id,
      user: { id: admin.id, email: admin.email, name: admin.name, role: admin.role }
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Login failed' }, { status: 500 })
  }
}