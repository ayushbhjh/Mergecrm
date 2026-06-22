import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const data = await prisma.meeting.findMany({
    include: { lead: true, owner: true },
    orderBy: { meetingDate: "asc" },
    take: 100,
  }).catch(() => []);

  return NextResponse.json({ data });
}
