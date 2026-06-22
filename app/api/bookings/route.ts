import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const data = await prisma.booking.findMany({
    include: { lead: true, assignedSalesPerson: true },
    orderBy: { bookingDate: "desc" },
    take: 100,
  }).catch(() => []);

  return NextResponse.json({ data });
}
