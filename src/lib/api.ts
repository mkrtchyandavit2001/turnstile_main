import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams;

  const res = await fetch("https://turnstile-admin.turniket.am/api/products", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      "Accept-Language": locale,
    },
    cache: "no-store",
  });

  const data = await res.json();
  return NextResponse.json(data);
}