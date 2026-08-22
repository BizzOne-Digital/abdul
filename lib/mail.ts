import nodemailer from 'nodemailer';

type SendMailOptions = {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
};

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !user || !pass) {
    return null;
  }

  const port = Number(process.env.SMTP_PORT || 465);
  const secure =
    process.env.SMTP_SECURE === 'true' || (process.env.SMTP_SECURE !== 'false' && port === 465);

  return {
    host,
    port,
    secure,
    auth: { user, pass },
  };
}

export function isMailConfigured(): boolean {
  return getSmtpConfig() !== null;
}

export function getNotificationEmail(): string {
  return (
    process.env.NOTIFICATION_EMAIL ||
    process.env.SMTP_FROM?.match(/<([^>]+)>/)?.[1] ||
    process.env.SMTP_USER ||
    'info@titan-llc.com'
  );
}

export function getMailFromAddress(): string {
  return (
    process.env.SMTP_FROM ||
    `Titan Logistics <${process.env.SMTP_USER || 'info@titan-llc.com'}>`
  );
}

export async function sendMail({ to, subject, html, text, replyTo }: SendMailOptions) {
  const smtp = getSmtpConfig();

  if (!smtp) {
    console.warn('[mail] SMTP not configured — skipped:', subject);
    return { ok: false as const, skipped: true as const };
  }

  const transporter = nodemailer.createTransport(smtp);

  await transporter.sendMail({
    from: getMailFromAddress(),
    to: Array.isArray(to) ? to.join(', ') : to,
    subject,
    html,
    text,
    replyTo,
  });

  return { ok: true as const };
}
