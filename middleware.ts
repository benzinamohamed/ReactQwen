import { NextResponse } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest } from 'next/server';
import { use } from 'react';

const PROTECTED_ROUTES = [
  '/code-execution',
  '/code-execution/[id]',
];

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {data :{user }} = await supabase.auth.getUser();

  const isProtectedRoute = PROTECTED_ROUTES.some((route) => req.nextUrl.pathname.startsWith(route));  
  console.log("dvvsdvdsvdsdvsdvsdvs",user)
  if(isProtectedRoute && !user) {
    console.log("User is not logged in, redirecting to home page");
    return NextResponse.redirect(new URL('/', req.nextUrl.origin)); 
  }

return res;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
  ],
};