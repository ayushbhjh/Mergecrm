import { PageShell } from "@/components/page-shell";
import { TeamTable } from "@/features/team/team-table";
import { teamPerformanceData } from "@/lib/mock-data";

export default function TeamPage() {
  return (
    <PageShell title="Team Performance" description="Rank the sales team by pipeline output and revenue generation.">
      <TeamTable data={teamPerformanceData} />
    </PageShell>
  );
}
