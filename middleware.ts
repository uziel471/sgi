import { NextResponse, NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const redirectLogin = new URL('/login', req.url);
  const redirectHome = new URL('/', req.url);

  // TODO: validar que el token sea con el secret correcto
  // redireccionamiento automatico una vez que se valide el token con secret
  // si el token es valido, redireccionar a home
  // remover menu del home
  // construccion de apis
  if (req.nextUrl.pathname.startsWith('/login') && !token) {
    return null;
  }

  if (req.nextUrl.pathname.startsWith('/') && !token) {
    return NextResponse.redirect(redirectLogin);
  }

  if (req.nextUrl.pathname.startsWith('/login') && token) {
    return NextResponse.redirect(redirectHome);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/home', '/login', '/'],
};
