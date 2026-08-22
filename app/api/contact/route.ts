import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import ContactMessage from '@/models/ContactMessage';
import { getNotificationEmail, sendMail } from '@/lib/mail';
import { CONTACT_EMAIL } from '@/lib/site';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { name, company, email, phone, subject, message } = body;

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
    }

    const contactMessage = await ContactMessage.create({
      name: name.trim(),
      company: company?.trim() || '',
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || '',
      subject: subject.trim(),
      message: message.trim(),
      isRead: false,
    });

    const notifyTo = getNotificationEmail();

    try {
      await sendMail({
        to: notifyTo,
        replyTo: email.trim(),
        subject: `[Titan Logistics] Contact: ${subject.trim()}`,
        text: [
          `Name: ${name}`,
          company ? `Company: ${company}` : '',
          `Email: ${email}`,
          phone ? `Phone: ${phone}` : '',
          '',
          message,
        ]
          .filter(Boolean)
          .join('\n'),
        html: `
          <h2>New contact message</h2>
          <p><strong>Name:</strong> ${name}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p>${message.replace(/\n/g, '<br />')}</p>
        `,
      });

      await sendMail({
        to: email.trim(),
        subject: 'We received your message — Titan Logistics LLC',
        html: `
          <p>Hi ${name},</p>
          <p>Thank you for contacting Titan Logistics. Our dispatch team has received your message and will respond shortly.</p>
          <p>If you need immediate assistance, call <strong>402-326-8820</strong> or email <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.</p>
          <p>— Titan Logistics LLC</p>
        `,
      });
    } catch (mailError) {
      console.error('Contact email error:', mailError);
    }

    return NextResponse.json(
      {
        success: true,
        id: contactMessage._id,
        message: 'Message sent successfully',
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('Contact submission error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
