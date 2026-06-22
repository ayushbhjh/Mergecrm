import Link from "next/link";
import { ArrowRight, BarChart3, CalendarCheck2, ClipboardList, ShieldCheck, Trophy } from "lucide-react";
import { APP_NAME, APP_TAGLINE } from "@/lib/constants";
import { dashboardMetrics } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MetricCard } from "@/components/metric-card";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border bg-hero-radial p-6 shadow-glow sm:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-6">
            <Badge tone="info" className="w-fit">
              Merge Cricket Tours CRM
            </Badge>
            <div className="space-y-3">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
                {APP_NAME}
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground">{APP_TAGLINE}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/login">
                  Enter Dashboard
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/signup">Create Account</Link>
              </Button>
            </div>
          </div>

          <Card className="w-full max-w-xl border-primary/15 bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle>Executive snapshot</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              {dashboardMetrics.slice(0, 4).map((metric) => (
                <MetricCard key={metric.label} metric={metric} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: ClipboardList, title: "Lead Management", description: "Full CRM workflows for schools and academies." },
          { icon: BarChart3, title: "Revenue Visibility", description: "Track the pipeline and closed revenue with clarity." },
          { icon: CalendarCheck2, title: "Follow-Up Discipline", description: "Never lose momentum on a high-value school lead." },
          { icon: ShieldCheck, title: "Secure by Default", description: "Auth, RBAC, and audit logging ready for scale." },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title} className="border-border/70">
              <CardContent className="p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-lg font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>What Merge CRM covers</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            {[
              "Lead pipeline and Kanban flow",
              "Follow-ups, meetings, and reminders",
              "Proposals and bookings",
              "Team performance leaderboard",
              "Reports and exports",
              "Notifications and audit logs",
            ].map((item) => (
              <div key={item} className="rounded-xl border bg-muted/30 p-4 text-sm">
                {item}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="space-y-4 p-6">
            <Trophy className="h-10 w-10 text-secondary" />
            <div>
              <h2 className="text-2xl font-semibold">Built for commercial scale</h2>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Designed to support a growing sales team, structured lead ownership, and the future AI features outlined in the brief.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
