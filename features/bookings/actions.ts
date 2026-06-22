"use server";

import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { bookingSchema } from "@/lib/validators";

export async function createBookingAction(input: unknown) {
  const parsed = bookingSchema.safeParse(input);
  if (!parsed.success) throw new Error("Invalid booking data");

  const booking = await prisma.booking.create({
    data: {
      ...parsed.data,
      packageAmount: new Prisma.Decimal(parsed.data.packageAmount),
      advancePayment: new Prisma.Decimal(parsed.data.advancePayment),
      remainingPayment: new Prisma.Decimal(parsed.data.remainingPayment),
    },
  });

  revalidatePath("/bookings");
  return booking;
}
