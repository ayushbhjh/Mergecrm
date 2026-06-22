import { PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const proposals = [
  { lead: "Delhi Public School", amount: "₹4.8L", status: "Sent" },
  { lead: "Ryan International", amount: "₹3.2L", status: "Under Review" },
];

export default function ProposalsPage() {
  return (
    <PageShell title="Proposals" description="Store proposal amounts, statuses, and attachments.">
      <div className="grid gap-4 xl:grid-cols-2">
        {proposals.map((proposal) => (
          <Card key={proposal.lead}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                {proposal.lead}
                <Badge>{proposal.status}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <div>Proposal amount: {proposal.amount}</div>
              <div className="mt-2 text-muted-foreground">Attachment upload can be wired to UploadThing in the next deployment pass.</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
