"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Bell,
  BookOpen,
  CalendarDays,
  FolderKanban,
  Gauge,
  ListTodo,
  Package,
  Settings2,
  ShieldUser,
  Users,
  UserCog,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { APP_NAME } from "@/lib/constants";

const navigation = [
  { href: "/dashboard", label: "Dashboard", icon: Gauge },
  { href: "/leads", label: "Leads", icon: FolderKanban },
  { href: "/pipeline", label: "Pipeline", icon: BarChart3 },
  { href: "/follow-ups", label: "Follow-Ups", icon: ListTodo },
  { href: "/meetings", label: "Meetings", icon: CalendarDays },
  { href: "/proposals", label: "Proposals", icon: BookOpen },
  { href: "/bookings", label: "Bookings", icon: Package },
  { href: "/team", label: "Team", icon: Users },
  { href: "/users", label: "Users", icon: UserCog },
  { href: "/activities", label: "Activity", icon: Bell },
  { href: "/reports", label: "Reports", icon: BarChart3 },
  { href: "/settings", label: "Settings", icon: Settings2 },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-screen w-72 shrink-0 border-r bg-card/70 px-4 py-6 backdrop-blur md:flex md:flex-col">
      <div className="flex items-center gap-3 px-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-glow">
          <ShieldUser className="h-5 w-5" />
        </div>
        <div>
          <div className="font-display text-lg font-semibold">{APP_NAME}</div>
          <div className="text-xs text-muted-foreground">Merge Cricket Tours</div>
        </div>
      </div>

      <nav className="mt-8 space-y-1">
        {navigation.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                active ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-accent hover:text-foreground",
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-2xl border bg-gradient-to-br from-primary/10 to-secondary/20 p-4">
        <p className="text-sm font-medium">Admin Console</p>
        <p className="mt-1 text-xs text-muted-foreground">Invite team members, reassign leads, and review analytics from one place.</p>
      </div>
    </aside>
  );
}
