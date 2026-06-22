import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  const body = (await request.json()) as { token?: string; password?: string };
  if (!body.token || !body.password) {
    return NextResponse.json({ error: "Token and password are required" }, { status: 400 });
  }

  const resetToken = await prisma.passwordResetToken.findUnique({ where: { token: body.token } });
  if (!resetToken || resetToken.usedAt || resetToken.expiresAt < new Date()) {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 });
  }

  const passwordHash = await bcrypt.hash(body.password, 12);
  await prisma.user.update({
    where: { id: resetToken.userId },
    data: { passwordHash },
  });

  await prisma.passwordResetToken.update({
    where: { token: body.token },
    data: { usedAt: new Date() },
  });

  return NextResponse.json({ message: "Password updated" });
}
