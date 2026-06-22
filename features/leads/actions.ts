"use server";

import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { leadSchema } from "@/lib/validators";

export async function createLeadAction(input: unknown) {
  const parsed = leadSchema.safeParse(input);
  if (!parsed.success) {
    throw new Error("Invalid lead data");
  }

  const lead = await prisma.lead.create({
    data: {
      ...parsed.data,
      estimatedDealValue: new Prisma.Decimal(parsed.data.estimatedDealValue),
    },
  });

  revalidatePath("/leads");
  revalidatePath("/dashboard");
  return lead;
}

export async function updateLeadAction(leadId: string, input: unknown) {
  const parsed = leadSchema.partial().safeParse(input);
  if (!parsed.success) {
    throw new Error("Invalid lead data");
  }

  const lead = await prisma.lead.update({
    where: { id: leadId },
    data: {
      ...parsed.data,
      estimatedDealValue:
        parsed.data.estimatedDealValue !== undefined
          ? new Prisma.Decimal(parsed.data.estimatedDealValue)
          : undefined,
    },
  });

  revalidatePath("/leads");
  revalidatePath("/dashboard");
  return lead;
}

export async function deleteLeadAction(leadId: string) {
  await prisma.lead.delete({ where: { id: leadId } });
  revalidatePath("/leads");
  revalidatePath("/dashboard");
}
