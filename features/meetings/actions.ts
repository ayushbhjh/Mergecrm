"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { meetingSchema } from "@/lib/validators";

export async function createMeetingAction(input: unknown) {
  const parsed = meetingSchema.safeParse(input);
  if (!parsed.success) throw new Error("Invalid meeting data");

  const meeting = await prisma.meeting.create({
    data: parsed.data,
  });

  revalidatePath("/meetings");
  return meeting;
}
