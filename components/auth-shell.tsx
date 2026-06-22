import type { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { APP_NAME, APP_TAGLINE } from "@/lib/constants";

export function AuthShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-[1.05fr_0.95fr]">
      <div className="hidden border-r bg-primary px-10 py-12 text-primary-foreground lg:flex lg:flex-col lg:justify-between">
        <div className="max-w-xl space-y-6">
          <Badge tone="info" className="bg-white/10 text-white">
            Merge Cricket Tours
          </Badge>
          <div className="space-y-3">
            <h1 className="font-display text-5xl font-semibold tracking-tight">{APP_NAME}</h1>
            <p className="text-lg text-primary-foreground/80">{APP_TAGLINE}</p>
          </div>
        </div>
        <Card className="border-white/10 bg-white/10 text-white shadow-none backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white">Why this CRM works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-white/80">
            <p>Structured pipeline ownership for your three-person sales team today and a larger team tomorrow.</p>
            <p>Built for bookings, proposals, and school relationship management across India.</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-10">
        <Card className="w-full max-w-md border-border/70 shadow-glow">
          <CardHeader>
            <CardTitle className="font-display text-3xl">{title}</CardTitle>
            <p className="text-sm text-muted-foreground">{description}</p>
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Card>
      </div>
    </div>
  );
}
