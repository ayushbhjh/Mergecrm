import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const users = await prisma.user.findMany({
    include: { roleRecord: true },
    orderBy: { createdAt: "desc" },
    take: 100,
  }).catch(() => []);

  return NextResponse.json({ data: users });
}
