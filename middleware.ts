import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

const PRODUCTION_HOST = "www.sslgroup.com";
const LOCALES = ["en", "hi", "ar"];

const intlMiddleware = createMiddleware({
  locales: LOCALES,
  defaultLocale: "en",
  localePrefix: "always",
});

// matches /en/admin, /hi/admin/xyz, /ar/admin etc.
const adminPageRegex = new RegExp(`^(/(${LOCALES.join("|")}))?/admin(/|$)`);;

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  const pathname = request.nextUrl.pathname;
  const adminEnabled = process.env.ENABLE_ADMIN === "true";

  if (host === "sslgroup.com") {
    const url = request.nextUrl.clone();
    url.host = PRODUCTION_HOST;
    url.protocol = "https";
    return NextResponse.redirect(url, 308);
  }

  // Block admin pages
  if (adminPageRegex.test(pathname) && !adminEnabled) {
    return NextResponse.rewrite(new URL("/404", request.url));
  }

  // Block admin API routes (matcher below allows this to run)
  if (pathname.startsWith("/api/admin") && !adminEnabled) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // Allow middleware to process all locale-based routing
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)", "/api/admin/:path*"],
};