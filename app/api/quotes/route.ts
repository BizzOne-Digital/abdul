import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import QuoteRequest from '@/models/QuoteRequest';
import { generateRequestNumber } from '@/lib/utils';
import { getNotificationEmail, sendMail } from '@/lib/mail';
import { CONTACT_EMAIL } from '@/lib/site';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();

    const requestNumber = generateRequestNumber('QTE');

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

    const notifyTo = getNotificationEmail();

    try {
      await sendMail({
        to: notifyTo,
        replyTo: body.email,
        subject: `[Titan Logistics] New quote request ${requestNumber}`,
        html: `
          <h2>New quote request: ${requestNumber}</h2>
          <p><strong>Name:</strong> ${body.fullName}</p>
          <p><strong>Company:</strong> ${body.company || '—'}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Phone:</strong> ${body.phone || '—'}</p>
          <p><strong>Service:</strong> ${body.serviceType}</p>
          <p><strong>Pickup:</strong> ${body.pickupCity}, ${body.pickupState} on ${body.pickupDate}</p>
          <p><strong>Delivery:</strong> ${body.deliveryCity}, ${body.deliveryState} on ${body.deliveryDate}</p>
          ${body.notes ? `<p><strong>Notes:</strong> ${body.notes}</p>` : ''}
        `,
      });

      if (body.email) {
        await sendMail({
          to: body.email,
          subject: `Quote request received — ${requestNumber}`,
          html: `
            <p>Hi ${body.fullName},</p>
            <p>Thank you for your quote request with Titan Logistics. Your reference number is <strong>${requestNumber}</strong>.</p>
            <p>Our dispatch team will review your shipment details and contact you shortly.</p>
            <p>Questions? Call <strong>402-326-8820</strong> or email <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.</p>
            <p>— Titan Logistics LLC</p>
          `,
        });
      }
    } catch (mailError) {
      console.error('Quote email error:', mailError);
    }

    return NextResponse.json(
      {
        success: true,
        requestNumber: quoteRequest.requestNumber,
        message: 'Quote request submitted successfully',
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('Quote submission error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to submit quote request', details: message },
      { status: 500 }
    );
  }
}
