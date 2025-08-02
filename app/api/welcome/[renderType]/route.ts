import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ renderType: string }> }
) {
  const { renderType } = await params;
  return NextResponse.json({ message: `This page is rendered as: ${renderType}` })
}