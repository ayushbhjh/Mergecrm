"use client";

import Link from "next/link";
import { Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";
import { useUIStore } from "@/store/use-ui-store";

export function AppHeader() {
  const searchQuery = useUIStore((state) => state.searchQuery);
  const setSearchQuery = useUIStore((state) => state.setSearchQuery);

  return (
    <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur">
      <div className="flex items-center gap-3 px-4 py-3 lg:px-6">
        <div className="flex-1">
          <div className="relative max-w-xl">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search leads, schools, bookings..."
              className="pl-9"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </div>
        </div>
        <Link href="/reports">
          <Button variant="outline" className="hidden md:inline-flex">
            <Sparkles className="h-4 w-4" />
            Quick Reports
          </Button>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
