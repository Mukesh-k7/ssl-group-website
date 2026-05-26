import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PRODUCTION_HOST = "www.sslgroup.in";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";

  if (host === "sslgroup.in") {
    const url = request.nextUrl.clone();
    url.host = PRODUCTION_HOST;
    url.protocol = "https";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
