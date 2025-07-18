import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('access_token')?.value

//   if (!token) {
//     return NextResponse.redirect(new URL('/auth/login', request.url))
//   }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
