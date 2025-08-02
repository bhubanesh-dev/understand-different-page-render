import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { renderType: string } }
) {
  const { renderType } = params;
  return NextResponse.json({ message: `This page is rendered as: ${renderType}` });