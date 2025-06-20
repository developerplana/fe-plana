import createMiddleware from 'next-intl/middleware';

const locales = ['en', 'id'];

export default createMiddleware({
  locales,
  defaultLocale: 'en',              // ✅ Add this!
  localeDetection: true,
  localePrefix: 'as-needed'         // ✅ This hides /en
});

export const config = {
  matcher: ['/((?!api|_next|public-file|search-api|.*\\..*).*)'],
};
