import { writeFile } from 'fs/promises';

import { NextResponse } from "next/server"

export async function POST(req) {
    const data = await req.formData()
    const file = data.get('file')
    
    if (!file) {
        return NextResponse.json({"msg": 'No image found'})
    }

    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData)
    const imgName = Math.ceil(Math.random()*10000) + file.name
    const path = `./public/uploads/${imgName}`
    const result = await writeFile(path, buffer)
    console.log(path)
    return NextResponse.json({path, "msg": 'Image uploaded'})
}