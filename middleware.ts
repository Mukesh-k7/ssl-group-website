import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

const PRODUCTION_HOST = "www.sslgroup.in";

const intlMiddleware = createMiddleware({
  locales: ["en", "hi", "ar"],
  defaultLocale: "en",
});

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";

  if (host === "sslgroup.in") {
    const url = request.nextUrl.clone();
    url.host = PRODUCTION_HOST;
    url.protocol = "https";
    return NextResponse.redirect(url, 308);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};