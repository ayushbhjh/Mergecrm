import { PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recentActivity } from "@/lib/mock-data";

export default function ActivitiesPage() {
  return (
    <PageShell title="Activity Timeline" description="Every meaningful action should leave an audit trail.">
      <Card>
        <CardHeader>
          <CardTitle>Audit log</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentActivity.map((item) => (
            <div key={item.id} className="rounded-2xl border p-4">
              <div className="font-medium">{item.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </PageShell>
  );
}
