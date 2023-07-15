import { NextResponse } from "next/server";

let error: any = null

if (!process.env.ACCESS_TOKEN_SECRET ||
    !process.env.REFRESH_TOKEN_SECRET)
    error = {
        cause: { type: 'CONFIG', name: 'ENV' },
        status: 500,
        message: `Invalid/Missing environment variables: "ACCESS_TOKEN_SECRET" or "REFRESH_TOKEN_SECRET"`,
    }

export async function GET(request: Request) {
    try {
        return NextResponse.json({ message: "Hello Zero!", error })
    } catch (e) {
        console.error("Zero Error: ", e);
    }
}

export const revalidate = 0
export const dynamic = 'force-dynamic'