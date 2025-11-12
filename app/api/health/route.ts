import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ ok: true, service: 'TalkToYouAI', version: '0.0.1' });
}
