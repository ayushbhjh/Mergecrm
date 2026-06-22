import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const data = await prisma.proposal.findMany({
    include: { lead: true, owner: true },
    orderBy: { createdAt: "desc" },
    take: 100,
  }).catch(() => []);

  return NextResponse.json({ data });
}
