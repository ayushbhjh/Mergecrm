import { NextResponse } from "next/server";
import { teamPerformanceData } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({ data: teamPerformanceData });
}
