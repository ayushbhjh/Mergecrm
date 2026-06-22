import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendTransactionalEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  if (!resend) {
    return { skipped: true };
  }

  return resend.emails.send({
    from: "Merge CRM <no-reply@mergecrickettours.com>",
    to,
    subject,
    html,
  });
}
