import { NextResponse } from 'next/server';


export async function middleware(request) {
    const userToken = request.cookies.get('token')?.value || "";

    if ((request.nextUrl.pathname.startsWith('/movie') || request.nextUrl.pathname === "/") && userToken === "") {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return null
}


export const config = {
    matcher: [
        '/',
        '/movie/:path*',
    ]
}