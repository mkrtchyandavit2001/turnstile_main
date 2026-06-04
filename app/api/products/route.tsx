import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale") ?? "hy";

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const res = await fetch("https://turnstile-admin.turniket.am/api/products", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        "Accept-Language": locale,
      },
      cache: "no-store",
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      return NextResponse.json({ data: [] }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error("Backend server is not responding:", error);
    return NextResponse.json({ data: [], message: "Backend-? ?????????? ?" });
  }
}