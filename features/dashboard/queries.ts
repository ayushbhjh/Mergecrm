import { prisma } from "@/lib/db";
import { dashboardMetrics, leadSourceData, leadStatusData, revenueData, salesFunnelData, teamPerformanceData } from "@/lib/mock-data";

export async function getDashboardSnapshot() {
  try {
    const [leads, bookings, followUps, activities] = await Promise.all([
      prisma.lead.count(),
      prisma.booking.count(),
      prisma.followUp.count({ where: { status: "Pending" } }),
      prisma.activity.findMany({ orderBy: { createdAt: "desc" }, take: 8 }),
    ]);

    return {
      metrics: dashboardMetrics.map((metric) =>
        metric.label === "Total Leads"
          ? { ...metric, value: String(leads) }
          : metric.label === "Tours Confirmed"
            ? { ...metric, value: String(bookings) }
            : metric.label === "Follow-Ups Due Today"
              ? { ...metric, value: String(followUps) }
              : metric,
      ),
      funnel: salesFunnelData,
      revenue: revenueData,
      team: teamPerformanceData,
      sources: leadSourceData,
      statuses: leadStatusData,
      activities,
    };
  } catch {
    return {
      metrics: dashboardMetrics,
      funnel: salesFunnelData,
      revenue: revenueData,
      team: teamPerformanceData,
      sources: leadSourceData,
      statuses: leadStatusData,
      activities: [],
    };
  }
}
