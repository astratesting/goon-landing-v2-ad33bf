import { NextResponse } from "next/server";

// Demo login endpoint - returns credentials for client-side signIn()
export async function GET() {
  return NextResponse.json({
    email: "demo@demo.app",
    password: "demo123",
  });
}
