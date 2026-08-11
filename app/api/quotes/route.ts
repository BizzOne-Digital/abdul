import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import QuoteRequest from '@/models/QuoteRequest';
import { generateRequestNumber } from '@/lib/utils';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();

    // Generate unique request number
    const requestNumber = generateRequestNumber('QTE');

    // Create quote request
    const quoteRequest = await QuoteRequest.create({
      requestNumber,
      ...body,
      weight: Number(body.weight),
      palletCount: body.palletCount ? Number(body.palletCount) : undefined,
      additionalStops: Number(body.additionalStops || 0),
      pickupDate: new Date(body.pickupDate),
      deliveryDate: new Date(body.deliveryDate),
      status: 'new',
    });

    return NextResponse.json({
      success: true,
      requestNumber: quoteRequest.requestNumber,
      message: 'Quote request submitted successfully',
    }, { status: 201 });

  } catch (error: any) {
    console.error('Quote submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit quote request', details: error.message },
      { status: 500 }
    );
  }
}
