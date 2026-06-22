import { randomUUID } from "crypto";
import { addHours } from "date-fns";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { sendTransactionalEmail } from "@/lib/email";

export async function POST(request: Request) {
  const { email } = (await request.json()) as { email?: string };
  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (user) {
    const token = randomUUID();
    await prisma.passwordResetToken.create({
      data: {
        userId: user.id,
        token,
        expiresAt: addHours(new Date(), 2),
      },
    });

    await sendTransactionalEmail({
      to: email,
      subject: "Reset your Merge CRM password",
      html: `<p>Use this link to reset your password:</p><p><a href="${process.env.NEXTAUTH_URL ?? "http://localhost:3000"}/reset-password?token=${token}">Reset password</a></p>`,
    });
  }

  return NextResponse.json({ message: "Reset email processed" });
}
