import type { UserRole } from "@/lib/types";

const permissions: Record<UserRole, string[]> = {
  ADMIN: [
    "users:read",
    "users:write",
    "leads:read",
    "leads:write",
    "reports:read",
    "analytics:read",
    "bookings:read",
    "bookings:write",
  ],
  MANAGER: [
    "users:read",
    "leads:read",
    "leads:write",
    "reports:read",
    "analytics:read",
    "bookings:read",
  ],
  SALES_EXECUTIVE: ["leads:read", "leads:write", "bookings:read"],
};

export function can(role: UserRole, permission: string) {
  return permissions[role].includes(permission);
}
