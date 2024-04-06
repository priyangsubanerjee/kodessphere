import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const session = await getToken({
    req: req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (req.nextUrl.pathname === "/") {
    if (session) {
      return NextResponse.redirect(
        new URL("/participation-certificate", req.url)
      );
    } else {
      return NextResponse.next();
    }
  } else {
    if (session) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL("/participation-certificate", req.url)
      );
    }
  }
}

export const config = {
  matcher: ["/", "/dashboard"],
};
