import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, context: { params: { renderType: string } }) {
  const { renderType } = context.params;
  return NextResponse.json({ message: `This page is rendered as: ${renderType}` });
}