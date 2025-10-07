import { NextResponse } from "next/server";

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || null;
  const hasAnon = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return NextResponse.json({
    ok: true,
    service: "health",
    supabase: {
      url,
      anonKey: hasAnon ? "present" : "missing"
    },
    ts: new Date().toISOString()
  });
}
