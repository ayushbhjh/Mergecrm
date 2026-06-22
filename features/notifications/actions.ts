"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";

export async function markNotificationReadAction(notificationId: string) {
  const notification = await prisma.notification.update({
    where: { id: notificationId },
    data: { readAt: new Date() },
  });

  revalidatePath("/dashboard");
  return notification;
}
