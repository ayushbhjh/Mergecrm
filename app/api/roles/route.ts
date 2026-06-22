import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const roles = await prisma.role.findMany({
    orderBy: { name: "asc" },
  }).catch(() => []);

  return NextResponse.json({ data: roles });
}
