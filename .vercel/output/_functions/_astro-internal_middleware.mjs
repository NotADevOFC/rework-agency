import { d as defineMiddleware, s as sequence } from './chunks/index_r896W7CA.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_Cc-YbU6V.mjs';
import 'piccolore';
import './chunks/astro/server_BxQs--Zw.mjs';
import 'clsx';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const response = await next();
  const pathname = context.url.pathname;
  const newResponse = new Response(response.body, response);
  newResponse.headers.set("X-Content-Type-Options", "nosniff");
  newResponse.headers.set("X-Frame-Options", "SAMEORIGIN");
  newResponse.headers.set("X-XSS-Protection", "1; mode=block");
  newResponse.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  newResponse.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(self), interest-cohort=()"
  );
  newResponse.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: https: blob:",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'"
    ].join("; ")
  );
  if (pathname.match(/\.(js|css|woff|woff2|ttf|eot)$/)) {
    newResponse.headers.set(
      "Cache-Control",
      "public, max-age=31536000, immutable"
    );
  } else if (pathname.match(/\.(png|jpg|jpeg|gif|svg|webp|ico)$/)) {
    newResponse.headers.set(
      "Cache-Control",
      "public, max-age=2592000, stale-while-revalidate=86400"
    );
  } else if (pathname.startsWith("/api/")) {
    newResponse.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate"
    );
  } else {
    newResponse.headers.set(
      "Cache-Control",
      "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
    );
  }
  return newResponse;
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
