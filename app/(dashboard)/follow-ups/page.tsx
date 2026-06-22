import { PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { overdueFollowUps } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

export default function FollowUpsPage() {
  return (
    <PageShell title="Follow-Ups" description="Track pending calls, WhatsApp follow-ups, and overdue tasks.">
      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Due today</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {overdueFollowUps.map((item) => (
              <div key={item.id} className="rounded-2xl border p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-medium">{item.schoolName}</div>
                    <div className="text-sm text-muted-foreground">{item.owner}</div>
                  </div>
                  <Badge tone="warning">Overdue</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Reminder system</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div className="rounded-2xl border p-4">Reminder notifications can be sent via in-app alert or email.</div>
            <div className="rounded-2xl border p-4">Dashboard alerts surface overdue follow-ups on the executive view.</div>
            <div className="rounded-2xl border p-4">A future cron job can escalate reminders to managers for aged items.</div>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
