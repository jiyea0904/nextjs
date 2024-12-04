import { NextResponse } from "next/server";

export async function GET() {
    const rabbit_data = {
        "message": "저는 강한 토끼입니다.",
        "image": "https://i.pinimg.com/originals/99/97/a4/9997a4d0fbd19360f2eb81870e449675.jpg"
      }

      return NextResponse.json(rabbit_data);
}