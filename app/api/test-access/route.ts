import { NextResponse } from "next/server";

const ACCESS_COOKIE = "test_access";
const CODE = process.env.TEST_ACCESS_CODE ?? "12345";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { code?: string } | null;
  const inputCode = body?.code?.trim();

  if (!inputCode || inputCode !== CODE) {
    return NextResponse.json({ ok: false, message: "Noto'g'ri kod" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: ACCESS_COOKIE,
    value: "1",
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
  });

  return response;
}

