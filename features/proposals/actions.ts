"use server";

import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { proposalSchema } from "@/lib/validators";

export async function createProposalAction(input: unknown) {
  const parsed = proposalSchema.safeParse(input);
  if (!parsed.success) throw new Error("Invalid proposal data");

  const proposal = await prisma.proposal.create({
    data: {
      ...parsed.data,
      proposalAmount: new Prisma.Decimal(parsed.data.proposalAmount),
    },
  });

  revalidatePath("/proposals");
  return proposal;
}
