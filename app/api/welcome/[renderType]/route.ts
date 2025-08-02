import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { renderType: string } }
) {
  const { renderType } = params || { renderType: "Guest" };
  return NextResponse.json({ message: `This page is rendered as: ${renderType}` });
}