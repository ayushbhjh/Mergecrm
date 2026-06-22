import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { DashboardMetric } from "@/lib/types";

export function MetricCard({ metric }: { metric: DashboardMetric }) {
  const toneClass =
    metric.tone === "success"
      ? "border-emerald-500/20 bg-emerald-500/5"
      : metric.tone === "warning"
        ? "border-amber-500/20 bg-amber-500/5"
        : metric.tone === "accent"
          ? "border-sky-500/20 bg-sky-500/5"
          : metric.tone === "muted"
            ? "border-border bg-muted/30"
            : "border-primary/20 bg-primary/5";

  return (
    <Card className={cn("overflow-hidden border", toneClass)}>
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm text-muted-foreground">{metric.label}</p>
            <div className="mt-2 text-3xl font-semibold tracking-tight">{metric.value}</div>
          </div>
          {metric.delta ? (
            <Badge tone={metric.tone === "warning" ? "warning" : "default"} className="flex items-center gap-1">
              <ArrowUpRight className="h-3.5 w-3.5" />
              {metric.delta}
            </Badge>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
