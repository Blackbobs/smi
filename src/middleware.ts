import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentUser } from "./utils/auth";

export async function middleware(request: NextRequest) {
  const user = await getCurrentUser()

  if (!user) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/admin",
};
