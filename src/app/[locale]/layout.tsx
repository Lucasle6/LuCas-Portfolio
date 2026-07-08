import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Sora, Fira_Sans, Geist_Mono, Fraunces } from "next/font/google";
import ContactFab from "@/components/ContactFab";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import { dictionaries, isLocale, locales } from "@/lib/dictionary";
import "../globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// italic-only on purpose: it exists for single accent words, not paragraphs
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["italic"],
});

// prerender /en and /es at build time — still a fully static site
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = dictionaries[locale];
  return { title: dict.meta.title, description: dict.meta.description };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = dictionaries[locale];

  return (
    <html
      lang={locale}
      className={`${sora.variable} ${firaSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <CustomCursor />
        <ContactFab dict={dict} />
        <Navbar locale={locale} dict={dict} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
