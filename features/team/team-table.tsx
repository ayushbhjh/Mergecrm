"use client";

import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export type TeamMemberRow = {
  name: string;
  assigned: number;
  contacted: number;
  meetings: number;
  proposals: number;
  tours: number;
  revenue: number;
  conversion: number;
};

const columns: ColumnDef<TeamMemberRow>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "assigned", header: "Assigned" },
  { accessorKey: "contacted", header: "Contacted" },
  { accessorKey: "meetings", header: "Meetings" },
  { accessorKey: "proposals", header: "Proposals" },
  { accessorKey: "tours", header: "Tours" },
  {
    accessorKey: "revenue",
    header: "Revenue",
    cell: ({ row }) => `₹${row.original.revenue}L`,
  },
  {
    accessorKey: "conversion",
    header: "Conversion",
    cell: ({ row }) => `${row.original.conversion}%`,
  },
];

export function TeamTable({ data }: { data: TeamMemberRow[] }) {
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
