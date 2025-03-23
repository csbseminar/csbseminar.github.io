import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get('type');
  
  let redirectUrl = '/';
  
  // Set redirect URLs based on the type parameter
  if (type === 'zoom') {
    redirectUrl = 'https://weizmann.zoom.us/j/99099764127?pwd=1o8uu2STrFde7Lqx5YFPDuyWThCHBl.1';
  } else if (type === 'group') {
    redirectUrl = 'https://groups.google.com/g/comp-spatial-biology';
  }
  
  // Return a redirect response
  return NextResponse.redirect(redirectUrl);
} 