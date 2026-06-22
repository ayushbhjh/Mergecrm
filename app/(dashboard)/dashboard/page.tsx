import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageShell } from "@/components/page-shell";
import { MetricCard } from "@/components/metric-card";
import { ChartPanel } from "@/components/chart-panel";
import { SalesFunnelChart, MonthlyRevenueChart, LeadSourceChart, LeadStatusChart } from "@/components/dashboard-charts";
import { getDashboardSnapshot } from "@/features/dashboard/queries";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const snapshot = await getDashboardSnapshot();

  return (
    <PageShell
      title="Executive Dashboard"
      description="A single operating view for the Merge Cricket Tours sales desk."
    >
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {snapshot.metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <ChartPanel title="Sales Funnel" description="Pipeline distribution by stage">
          <SalesFunnelChart data={snapshot.funnel} />
        </ChartPanel>
        <ChartPanel title="Monthly Revenue" description="Closed revenue trend">
          <MonthlyRevenueChart data={snapshot.revenue} />
        </ChartPanel>
        <ChartPanel title="Team Performance" description="Leaderboard signals and conversion output">
          <Card>
            <CardHeader>
              <CardTitle>Top performers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {snapshot.team.map((member) => (
                <div key={member.name} className="rounded-2xl border p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{member.name}</div>
                    <div className="text-sm text-muted-foreground">{member.conversion}% conversion</div>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-sm md:grid-cols-4">
                    <div>Assigned: {member.assigned}</div>
                    <div>Meetings: {member.meetings}</div>
                    <div>Proposals: {member.proposals}</div>
                    <div>Revenue: ₹{member.revenue}L</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </ChartPanel>
        <ChartPanel title="Lead Source Distribution" description="Which channels create your strongest opportunities">
          <LeadSourceChart data={snapshot.sources} />
        </ChartPanel>
        <ChartPanel title="Lead Status Distribution" description="Current health of the funnel">
          <LeadStatusChart data={snapshot.statuses} />
        </ChartPanel>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {snapshot.activities.length ? snapshot.activities.map((activity) => (
              <div key={activity.id} className="rounded-2xl border p-4">
                <div className="font-medium">{activity.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{activity.description}</p>
              </div>
            )) : (
              <div className="rounded-2xl border border-dashed p-8 text-sm text-muted-foreground">
                Activity timeline will populate as leads move through the pipeline.
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Today’s priorities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="rounded-2xl border bg-muted/30 p-4">16 follow-ups due today</div>
            <div className="rounded-2xl border bg-muted/30 p-4">4 proposals awaiting review</div>
            <div className="rounded-2xl border bg-muted/30 p-4">2 meetings scheduled before noon</div>
            <div className="rounded-2xl border bg-muted/30 p-4">1 booking awaiting final payment</div>
          </CardContent>
        </Card>
      </section>
    </PageShell>
  );
}
