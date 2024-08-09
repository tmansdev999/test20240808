import { NextResponse } from "next/server";


export async function GET(req) {
    const response = NextResponse.json({
        message: "LogOut SuccessFully.",
    }, { status: 200 });

    response.cookies.delete('token');

    return response
}