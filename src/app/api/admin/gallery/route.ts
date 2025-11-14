import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const GALLERY_FILE = path.join(process.cwd(), 'src', 'data', 'gallery.json')

export async function GET() {
  try {
    const data = fs.readFileSync(GALLERY_FILE, 'utf8')
    return NextResponse.json(JSON.parse(data))
  } catch (error) {
    return NextResponse.json({ images: [] })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { images } = await request.json()
    
    const data = JSON.stringify({ images }, null, 2)
    fs.writeFileSync(GALLERY_FILE, data, 'utf8')
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Errore nel salvataggio' },
      { status: 500 }
    )
  }
}
