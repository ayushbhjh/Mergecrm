"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { humanizeEnumValue } from "@/lib/format";

export type PipelineCard = {
  id: string;
  title: string;
  owner: string;
  value: string;
  status: string;
};

export function KanbanBoard({ items }: { items: PipelineCard[] }) {
  const [cards, setCards] = useState(items);
  const columns = useMemo(
    () => ["New", "Contacted", "Interested", "Meeting_Scheduled", "Proposal_Sent", "Negotiation", "Tour_Confirmed", "Lost"],
    [],
  );

  function moveCard(id: string, status: string) {
    setCards((current) => current.map((card) => (card.id === id ? { ...card, status } : card)));
  }

  return (
    <div className="grid gap-4 xl:grid-cols-4">
      {columns.map((column) => (
        <Card
          key={column}
          className="min-h-[460px] border-dashed"
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) => {
            event.preventDefault();
            const leadId = event.dataTransfer.getData("text/plain");
            if (leadId) moveCard(leadId, column);
          }}
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-base">
              {humanizeEnumValue(column)}
              <Badge>{cards.filter((card) => card.status === column).length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {cards
              .filter((card) => card.status === column)
              .map((card) => (
                <div
                  key={card.id}
                  draggable
                  onDragStart={(event) => event.dataTransfer.setData("text/plain", card.id)}
                  className="cursor-grab rounded-2xl border bg-background p-4 shadow-sm active:cursor-grabbing"
                >
                  <div className="font-medium">{card.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{card.owner}</div>
                  <div className="mt-3 text-sm font-semibold text-primary">{card.value}</div>
                </div>
              ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
