// Optional email notification on new bookings. No-op unless RESEND_API_KEY is
// set, so the site works fully (WhatsApp + admin panel) without it.
import type { BookingInput } from './db';

export async function notifyOwner(b: BookingInput, id: number): Promise<void> {
  const key = import.meta.env.RESEND_API_KEY;
  const to = import.meta.env.BOOKING_NOTIFY_EMAIL;
  const from = import.meta.env.BOOKING_FROM_EMAIL;
  if (!key || !to || !from) return; // email disabled — that's fine

  const lines = [
    `New booking request #${id}`,
    '',
    `Name: ${b.name}`,
    `Phone: ${b.phone}`,
    b.email ? `Email: ${b.email}` : '',
    b.vehicle ? `Vehicle: ${b.vehicle}` : '',
    b.service ? `Service: ${b.service}` : '',
    b.preferred ? `Preferred: ${b.preferred}` : '',
    b.address ? `Address: ${b.address}` : '',
    b.notes ? `Notes: ${b.notes}` : '',
    `Consent to contact: ${b.consent ? 'Yes' : 'No'}`,
  ].filter(Boolean);

  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        subject: `New Booking — ${b.name} (${b.service ?? 'detail'})`,
        text: lines.join('\n'),
      }),
    });
  } catch (err) {
    // Never let email failure break the booking — it's already saved.
    console.error('notifyOwner failed:', err);
  }
}
