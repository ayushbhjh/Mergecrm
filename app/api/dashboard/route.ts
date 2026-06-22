import { NextResponse } from "next/server";
import { dashboardMetrics, leadSourceData, leadStatusData, revenueData, salesFunnelData, teamPerformanceData } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({
    metrics: dashboardMetrics,
    funnel: salesFunnelData,
    revenue: revenueData,
    team: teamPerformanceData,
    sources: leadSourceData,
    statuses: leadStatusData,
  });
}
