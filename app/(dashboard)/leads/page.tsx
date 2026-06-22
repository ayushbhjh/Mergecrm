import { Badge } from "@/components/ui/badge";
import { PageShell } from "@/components/page-shell";
import { LeadForm } from "@/features/leads/components/lead-form";
import { LeadsTable } from "@/features/leads/components/leads-table";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  const leads = await prisma.lead.findMany({
    include: { assignedTo: true },
    orderBy: { updatedAt: "desc" },
    take: 50,
  }).catch(() => []);

  const rows = leads.length
    ? leads.map((lead) => ({
        leadId: lead.leadId,
        schoolName: lead.schoolName,
        contactPerson: lead.contactPerson,
        state: lead.state,
        city: lead.city,
        assignedTo: lead.assignedTo ? { name: lead.assignedTo.name } : null,
        status: lead.status,
        priority: lead.priority,
        estimatedDealValue: lead.estimatedDealValue.toString(),
        nextFollowUpDate: lead.nextFollowUpDate?.toISOString() ?? null,
      }))
    : [
        {
          leadId: "MCT-000001",
          schoolName: "Delhi Public School, Dehradun",
          contactPerson: "Ms. Kavita Sharma",
          state: "Uttarakhand",
          city: "Dehradun",
          assignedTo: { name: "Siddhi" },
          status: "Interested",
          priority: "High",
          estimatedDealValue: "480000",
          nextFollowUpDate: new Date().toISOString(),
        },
      ];

  return (
    <PageShell
      title="Leads"
      description="Create, qualify, and move every school and academy lead through the sales process."
      action={<Badge tone="info">{rows.length} records</Badge>}
    >
      <div className="grid gap-6">
        <LeadForm />
        <LeadsTable data={rows} />
        <div className="grid gap-4 md:grid-cols-3">
          {["State", "City", "Assigned User"].map((item) => (
            <Badge key={item} tone="default" className="w-fit px-4 py-2">
              Filter: {item}
            </Badge>
          ))}
        </div>
        <div className="text-xs text-muted-foreground">
          Lead status labels are normalized to the same values used in the Prisma schema, so pipeline movement stays consistent.
        </div>
      </div>
    </PageShell>
  );
}
