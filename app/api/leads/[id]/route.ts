import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { leadSchema } from "@/lib/validators";

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const body = await request.json();
  const parsed = leadSchema.partial().safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid lead data" }, { status: 400 });
  }

  const lead = await prisma.lead.update({
    where: { id },
    data: parsed.data,
  });

  return NextResponse.json({ data: lead });
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  await prisma.lead.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
