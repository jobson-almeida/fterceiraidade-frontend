import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

const API_URL_BASE = process.env.API_URL_BASE;

export async function GET() {
  const response = await fetch(`${API_URL_BASE}/chart_data`, {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    //cache: "no-cache" //ok
  })
  const data = await response.json()
  revalidateTag("chart_data")
  return NextResponse.json(data)
}