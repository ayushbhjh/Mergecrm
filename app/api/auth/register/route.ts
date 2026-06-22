import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { signupSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = signupSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid signup data" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { email: parsed.data.email } });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    const passwordHash = await bcrypt.hash(parsed.data.password, 12);
    const defaultRole = await prisma.role.findUnique({
      where: {
        slug:
          parsed.data.role === "ADMIN"
            ? "admin"
            : parsed.data.role === "SALES_EXECUTIVE"
            ? "sales-executive"
            : "manager",
      },
    });

    await prisma.user.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        passwordHash,
        role: parsed.data.role,
        roleId: defaultRole?.id,
      },
    });

    return NextResponse.json({ message: "Account created successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ error: "Unable to create account" }, { status: 500 });
  }
}
