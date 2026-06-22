import { PageShell } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function UsersPage() {
  const users = await prisma.user.findMany({
    include: { roleRecord: true },
    orderBy: { createdAt: "desc" },
    take: 50,
  }).catch(() => []);

  type UserRow = {
    id: string;
    name: string | null;
    email: string | null;
    role: string;
    title?: string | null;
    roleRecord?: { name: string } | null;
  };

  const rows: UserRow[] = users.length
    ? users
    : [
        { id: "1", name: "Ayush Kumar", email: "ayush@mergecrickettours.com", role: "ADMIN", title: "Founder & Admin" },
        { id: "2", name: "Siddhi", email: "siddhi@mergecrickettours.com", role: "SALES_EXECUTIVE", title: "Business Development" },
        { id: "3", name: "Rishu", email: "rishu@mergecrickettours.com", role: "SALES_EXECUTIVE", title: "Business Development" },
      ];

  return (
    <PageShell title="Users" description="View team members, roles, and account status.">
      <Card>
        <CardHeader>
          <CardTitle>Team roster</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {rows.map((user) => (
            <div key={user.id} className="flex flex-col gap-3 rounded-2xl border p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="font-medium">{user.name ?? "Unnamed user"}</div>
                <div className="text-sm text-muted-foreground">{user.email}</div>
                {user.title ? <div className="text-xs text-muted-foreground">{user.title}</div> : null}
              </div>
              <Badge tone="info">{(user.roleRecord?.name ?? String(user.role)).replace(/_/g, " ")}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </PageShell>
  );
}
