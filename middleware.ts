import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";

  // If the visitor is on electricityfinance.onewavetv.com
  if (host.startsWith("electricityfinance.onewavetv.com")) {
    return NextResponse.rewrite(new URL("/electricity-conference", req.url));
  }

  return NextResponse.next();
}
