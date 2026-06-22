import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const notifications = await prisma.notification.findMany({
    include: { user: true },
    orderBy: { createdAt: "desc" },
    take: 50,
  }).catch(() => []);
  return NextResponse.json({ data: notifications });
}
