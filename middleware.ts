import { NextResponse } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest } from 'next/server';

const PROTECTED_ROUTES = [
  '/code-execution',
  '/code-execution/chat/[conversationId]',
];

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {data :{user }} = await supabase.auth.getUser();
  const isProtectedRoute = PROTECTED_ROUTES.some((route) => req.nextUrl.pathname.startsWith(route));  
  
  //
  if(isProtectedRoute && !user) {
    
    return NextResponse.redirect(new URL('/', req.nextUrl.origin)); 
  }
  if(isProtectedRoute && user){
    const pathName = req.nextUrl.pathname.split("/")
   const id = pathName? pathName[pathName.length -1] : null
   const {data , error} = await supabase.from("conversations").select("*").eq("user_id",user.id).eq("id" , id);
   if(data?.length === 0) 
    {
     return NextResponse.redirect(new URL("/404",req.url))
      
    } 
  }

return res;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
  ],
};