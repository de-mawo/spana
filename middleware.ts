import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const ROLES_ALLOWED_TO_AUTH = ["ADMIN", "MODERATOR", "USER"];

export default withAuth(
  function middleware(req) {
    if (
      req.nextUrl.pathname.startsWith("/dashboard/admin") &&
      req.nextauth.token?.role !== "ADMIN"
    ) {
      return NextResponse.redirect(new URL("/", req.url));
    } else if (
      req.nextUrl.pathname.startsWith("/dashboard/moderator") &&
      req.nextauth.token?.role !== "ADMIN" &&
      req.nextauth.token?.role !== "MODERATOR"
    ) {
      return NextResponse.redirect(new URL("/", req.url));
    } else if (!req.nextauth.token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) =>
        token?.role !== undefined && ROLES_ALLOWED_TO_AUTH.includes(token.role),
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", ],
};
