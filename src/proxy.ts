import { NextResponse, type NextRequest } from "next/server";
import { isLocale } from "@/lib/dictionary";

/*
  Next 16 renamed the middleware convention to proxy. This one does a
  single job: any path without a locale prefix gets redirected to the
  visitor's preferred language (Accept-Language sniff, es → /es,
  everything else → /en).
*/
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];
  if (isLocale(first)) return NextResponse.next();

  const acceptsSpanish = request.headers
    .get("accept-language")
    ?.toLowerCase()
    .startsWith("es");
  const url = request.nextUrl.clone();
  url.pathname = `/${acceptsSpanish ? "es" : "en"}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // skip api routes, Next internals, and anything with a file extension
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
