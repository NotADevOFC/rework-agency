import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  // Get the pathname
  const pathname = context.url.pathname;

  // Clone the response to modify headers
  const newResponse = new Response(response.body, response);

  // Security headers
  newResponse.headers.set('X-Content-Type-Options', 'nosniff');
  newResponse.headers.set('X-Frame-Options', 'SAMEORIGIN');
  newResponse.headers.set('X-XSS-Protection', '1; mode=block');
  newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  newResponse.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(self), interest-cohort=()'
  );

  // Content Security Policy (adjust as needed)
  newResponse.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: https: blob:",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ')
  );

  // Cache control based on file type
  if (pathname.match(/\.(js|css|woff|woff2|ttf|eot)$/)) {
    // Static assets - cache for 1 year
    newResponse.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  } else if (pathname.match(/\.(png|jpg|jpeg|gif|svg|webp|ico)$/)) {
    // Images - cache for 1 month
    newResponse.headers.set(
      'Cache-Control',
      'public, max-age=2592000, stale-while-revalidate=86400'
    );
  } else if (pathname.startsWith('/api/')) {
    // API routes - no cache
    newResponse.headers.set(
      'Cache-Control',
      'no-store, no-cache, must-revalidate'
    );
  } else {
    // HTML pages - short cache with revalidation
    newResponse.headers.set(
      'Cache-Control',
      'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400'
    );
  }

  return newResponse;
});
