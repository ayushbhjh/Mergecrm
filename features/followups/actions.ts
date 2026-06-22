"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { followUpSchema } from "@/lib/validators";

export async function createFollowUpAction(input: unknown) {
  const parsed = followUpSchema.safeParse(input);
  if (!parsed.success) throw new Error("Invalid follow-up data");

  const followUp = await prisma.followUp.create({
    data: parsed.data,
  });

  revalidatePath("/follow-ups");
  return followUp;
}
