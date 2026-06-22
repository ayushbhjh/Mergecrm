"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { humanizeEnumValue } from "@/lib/format";

export type LeadRow = {
  leadId: string;
  schoolName: string;
  contactPerson: string;
  state: string;
  city: string;
  assignedTo?: { name: string | null } | null;
  status: string;
  priority: string;
  estimatedDealValue: string | number;
  nextFollowUpDate?: string | Date | null;
};

const columns: ColumnDef<LeadRow>[] = [
  { accessorKey: "leadId", header: "Lead ID" },
  {
    accessorKey: "schoolName",
    header: "School",
    cell: ({ row }) => <div className="font-medium">{row.original.schoolName}</div>,
  },
  {
    accessorKey: "contactPerson",
    header: "Contact",
    cell: ({ row }) => (
      <div>
        <div className="font-medium">{row.original.contactPerson}</div>
        <div className="text-xs text-muted-foreground">
          {row.original.city}, {row.original.state}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "assignedTo",
    header: "Owner",
    cell: ({ row }) => row.original.assignedTo?.name ?? "Unassigned",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <Badge>{humanizeEnumValue(row.original.status)}</Badge>,
  },
  { accessorKey: "priority", header: "Priority" },
  { accessorKey: "estimatedDealValue", header: "Value" },
  {
    accessorKey: "nextFollowUpDate",
    header: "Next Follow-Up",
    cell: ({ row }) => {
      const value = row.original.nextFollowUpDate;
      return value ? new Date(value).toLocaleDateString("en-IN") : "—";
    },
  },
  {
    id: "actions",
    header: "",
    cell: () => (
      <Button variant="ghost" size="icon" aria-label="Lead actions">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    ),
  },
];

export function LeadsTable({ data }: { data: LeadRow[] }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
