import { NextResponse, type NextRequest } from "next/server";
import { isLocale, locales } from "@/lib/dictionary";

/*
  Next 16 renamed the middleware convention to proxy. This one does a
  single job: any path without a locale prefix gets redirected to the
  visitor's preferred language. We walk their Accept-Language list in
  order and pick the first tag that matches one of our locales (es, de,
  …); if none match we default to English.
*/
function detectLocale(header: string | null) {
  const wanted = (header ?? "")
    .toLowerCase()
    .split(",")
    .map((part) => part.split(";")[0].trim().split("-")[0]);
  return wanted.find((tag) => isLocale(tag)) ?? locales[0];
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];
  if (isLocale(first)) return NextResponse.next();

  const locale = detectLocale(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // skip api routes, Next internals, and anything with a file extension
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
