import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { leadSchema } from "@/lib/validators";

export async function GET() {
  const leads = await prisma.lead.findMany({
    include: { assignedTo: true, createdBy: true, followUps: true, proposals: true, bookings: true },
    orderBy: { updatedAt: "desc" },
    take: 100,
  }).catch(() => []);
  return NextResponse.json({ data: leads });
}

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid lead data" }, { status: 400 });
  }

  const lead = await prisma.lead.create({
    data: {
      ...parsed.data,
      expectedCloseDate: parsed.data.expectedCloseDate,
      lastContactDate: parsed.data.lastContactDate,
      nextFollowUpDate: parsed.data.nextFollowUpDate,
      estimatedDealValue: new Prisma.Decimal(parsed.data.estimatedDealValue),
      assignedToId: parsed.data.assignedToId || undefined,
    },
  });

  return NextResponse.json({ data: lead }, { status: 201 });
}
