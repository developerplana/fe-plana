import createMiddleware from 'next-intl/middleware';

const locales = ['en', 'id'];
export default createMiddleware({
  locales,
  defaultLocale: 'id',
  localeDetection: true,
  localePrefix: 'as-needed'
});


export const config = {
  matcher: ['/((?!api|_next|public-file|search-api|.*\\..*).*)']
};
