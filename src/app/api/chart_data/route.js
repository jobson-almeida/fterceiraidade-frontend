import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("http://localhost:8000/chart_data", {
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