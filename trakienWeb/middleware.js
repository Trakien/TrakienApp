import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const jwt = request.cookies.get("token");
  if (!jwt) return NextResponse.redirect(new URL("/login", request.url));

  if (jwt) {
    if (request.nextUrl.pathname.includes("/login")) {
      try {
        await jwtVerify(jwt, new TextEncoder().encode("admin"));
        return NextResponse.redirect(new URL("/dashboard", request.url));
      } catch (error) {
        return NextResponse.next();
      }
    }
  }

  try {
    const { payload } = await jwtVerify(jwt, new TextEncoder().encode("admin"));
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
