import { NextRequest, NextResponse } from 'next/server'

// Password admin - CAMBIALA CON UNA TUA PASSWORD SICURA!
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'sleepylore2024'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    if (password === ADMIN_PASSWORD) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { success: false, message: 'Password errata' },
        { status: 401 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Errore del server' },
      { status: 500 }
    )
  }
}
