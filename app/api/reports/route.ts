import { NextResponse } from "next/server";

const reportRows = [
  ["report", "rows", "generatedAt"],
  ["Lead Conversion Report", "248", new Date().toISOString()],
  ["Revenue Report", "31.2L", new Date().toISOString()],
  ["Team Performance Report", "3", new Date().toISOString()],
  ["Lead Source Report", "6", new Date().toISOString()],
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const format = searchParams.get("format");

  if (format === "csv") {
    const csv = reportRows.map((row) => row.join(",")).join("\n");
    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": 'attachment; filename="merge-crm-reports.csv"',
      },
    });
  }

  if (format === "excel") {
    const tsv = reportRows.map((row) => row.join("\t")).join("\n");
    return new NextResponse(tsv, {
      headers: {
        "Content-Type": "application/vnd.ms-excel; charset=utf-8",
        "Content-Disposition": 'attachment; filename="merge-crm-reports.xls"',
      },
    });
  }

  return NextResponse.json({
    reports: [
      { id: "lead-conversion", name: "Lead Conversion Report" },
      { id: "revenue", name: "Revenue Report" },
      { id: "team-performance", name: "Team Performance Report" },
      { id: "lead-source", name: "Lead Source Report" },
    ],
    exports: ["CSV", "Excel"],
  });
}
