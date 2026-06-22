export { auth as middleware } from "@/lib/auth";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/leads/:path*",
    "/pipeline/:path*",
    "/follow-ups/:path*",
    "/meetings/:path*",
    "/proposals/:path*",
    "/bookings/:path*",
    "/team/:path*",
    "/users/:path*",
    "/activities/:path*",
    "/reports/:path*",
    "/settings/:path*",
  ],
};
