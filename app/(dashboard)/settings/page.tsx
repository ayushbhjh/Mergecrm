import { PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function SettingsPage() {
  return (
    <PageShell title="Settings" description="Admin controls for user management, invitations, and permissions.">
      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Admin features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between rounded-2xl border p-4">
              <span>Invite team members</span>
              <Badge>Planned</Badge>
            </div>
            <div className="flex items-center justify-between rounded-2xl border p-4">
              <span>Deactivate users</span>
              <Badge>Planned</Badge>
            </div>
            <div className="flex items-center justify-between rounded-2xl border p-4">
              <span>Assign and reassign leads</span>
              <Badge>Ready</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Commercial SaaS readiness</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>Role-based access control is scaffolded in the auth layer.</p>
            <p>Google login, password login, forgot/reset flows, and a Prisma-backed user store are ready.</p>
            <p>UploadThing and Resend are wired at the utility layer for future production secrets.</p>
            <Button className="mt-2">Save settings</Button>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
