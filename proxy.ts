import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ACCESS_COOKIE = "test_access";

export function proxy(request: NextRequest) {
  const hasAccess = request.cookies.get(ACCESS_COOKIE)?.value === "1";

  if (!hasAccess) {
    const loginUrl = new URL("/", request.url);
    loginUrl.searchParams.set("testLocked", "1");
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/test/:path*"],
};

