import * as React from "react";
import { cn } from "@/lib/utils";

export function Sheet({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-2xl border bg-card p-4 shadow-sm", className)} {...props} />;
}
