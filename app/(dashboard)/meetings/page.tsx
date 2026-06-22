import { PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const meetings = [
  { lead: "Delhi Public School", date: "2026-06-26", time: "11:00 AM", type: "Zoom", agenda: "Tour package walkthrough" },
  { lead: "Ryan International", date: "2026-06-27", time: "03:30 PM", type: "Google Meet", agenda: "Pricing and logistics review" },
];

export default function MeetingsPage() {
  return (
    <PageShell title="Meetings" description="Schedule Zoom, Google Meet, phone, or in-person meetings.">
      <div className="grid gap-4 xl:grid-cols-2">
        {meetings.map((meeting) => (
          <Card key={meeting.lead}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                {meeting.lead}
                <Badge tone="info">{meeting.type}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>Date: {meeting.date}</div>
              <div>Time: {meeting.time}</div>
              <div>Agenda: {meeting.agenda}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
