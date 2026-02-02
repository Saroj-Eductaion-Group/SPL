import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Mock coordinator authentication
    if (email === 'coordinator@spl.com' && password === 'coord123') {
      return NextResponse.json({
        success: true,
        token: 'coordinator-token-mock',
        user: {
          id: 'coord-1',
          email: 'coordinator@spl.com',
          name: 'District Coordinator',
          role: 'COORDINATOR',
          district: 'Lucknow'
        }
      })
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ error: 'Login failed' }, { status: 500 })
  }
}