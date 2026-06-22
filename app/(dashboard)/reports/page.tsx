import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const reports = [
  "Lead Conversion Report",
  "Revenue Report",
  "Team Performance Report",
  "Lead Source Report",
];

export default function ReportsPage() {
  return (
    <PageShell title="Reports" description="Export operational and revenue reports in CSV or Excel format.">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>Available reports</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {reports.map((report) => (
              <div key={report} className="flex items-center justify-between rounded-2xl border p-4">
                <span className="text-sm font-medium">{report}</span>
                <Badge>Ready</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Export</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button asChild className="w-full">
              <Link href="/api/reports?format=csv">Download CSV</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/api/reports?format=excel">Download Excel</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
