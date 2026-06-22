import { PageShell } from "@/components/page-shell";
import { KanbanBoard } from "@/features/pipeline/components/kanban-board";

const sampleCards = [
  { id: "1", title: "Delhi Public School", owner: "Siddhi", value: "₹4.8L", status: "Interested" },
  { id: "2", title: "Ryan International", owner: "Rishu", value: "₹3.2L", status: "Contacted" },
  { id: "3", title: "Army Public School", owner: "Ayush", value: "₹6.1L", status: "New" },
  { id: "4", title: "Kendriya Vidyalaya", owner: "Siddhi", value: "₹2.4L", status: "Proposal_Sent" },
  { id: "5", title: "Summer Valley School", owner: "Rishu", value: "₹5.0L", status: "Negotiation" },
];

export default function PipelinePage() {
  return (
    <PageShell
      title="Pipeline"
      description="Drag leads across stages to keep the sales desk aligned with reality."
    >
      <KanbanBoard items={sampleCards} />
    </PageShell>
  );
}
