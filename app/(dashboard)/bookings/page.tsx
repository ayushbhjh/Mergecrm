import { PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const bookings = [
  { school: "Delhi Public School", tourType: "Dehradun Cricket Tour", paymentStatus: "Partial", amount: "₹4.8L" },
  { school: "Kendriya Vidyalaya", tourType: "Dehradun Cricket Tour", paymentStatus: "Pending", amount: "₹2.4L" },
];

export default function BookingsPage() {
  return (
    <PageShell title="Tour Bookings" description="Track confirmed deals, payments, and travel dates.">
      <div className="grid gap-4 xl:grid-cols-2">
        {bookings.map((booking) => (
          <Card key={booking.school}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                {booking.school}
                <Badge tone={booking.paymentStatus === "Partial" ? "warning" : "default"}>{booking.paymentStatus}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>Tour type: {booking.tourType}</div>
              <div>Package amount: {booking.amount}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
