import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const COMMISSIONI_FILE = path.join(process.cwd(), 'src', 'data', 'commissioni.json')

export async function GET() {
  try {
    const data = fs.readFileSync(COMMISSIONI_FILE, 'utf8')
    return NextResponse.json(JSON.parse(data))
  } catch (error) {
    return NextResponse.json({ commissioni: [] })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { commissioni } = await request.json()
    
    const data = JSON.stringify({ commissioni }, null, 2)
    fs.writeFileSync(COMMISSIONI_FILE, data, 'utf8')
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Errore nel salvataggio' },
      { status: 500 }
    )
  }
}
