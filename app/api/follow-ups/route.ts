import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const data = await prisma.followUp.findMany({
    include: { lead: true, assignedUser: true },
    orderBy: { followUpDate: "asc" },
    take: 100,
  }).catch(() => []);

  return NextResponse.json({ data });
}
