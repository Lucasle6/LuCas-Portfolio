import { NextResponse } from "next/server";
import { Resend } from "resend";

/*
  First server code in the project: a Route Handler. POST /api/contact
  receives the form JSON and sends a real email through Resend. The
  API key lives only here, server-side — the browser never sees it.
*/
export async function POST(request: Request) {
  let payload: {
    name?: string;
    email?: string;
    message?: string;
    company?: string;
  };
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad-json" }, { status: 400 });
  }

  // honeypot: humans never see (or fill) the hidden "company" field —
  // bots autofill everything, so a value here means spam. Pretend success.
  if (payload.company) {
    return NextResponse.json({ ok: true });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";
  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "missing-fields" },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { ok: false, error: "not-configured" },
      { status: 503 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    // resend.dev sender works without verifying a domain (free tier);
    // replies go to the visitor thanks to replyTo
    from: "Portfolio <onboarding@resend.dev>",
    to: "j.cleon695@gmail.com",
    replyTo: email,
    subject: `Portfolio contact — ${name.slice(0, 80)}`,
    text: `${message.slice(0, 5000)}\n\n— ${name} (${email})`,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { ok: false, error: "send-failed" },
      { status: 502 },
    );
  }
  return NextResponse.json({ ok: true });
}
