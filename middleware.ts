import createMiddleware from 'next-intl/middleware';

const locales = ['en', 'id'];

export default createMiddleware({
  locales,
  defaultLocale: 'en',
  localeDetection: true,
  localePrefix: 'as-needed'
});

export const config = {
  matcher: [
    // Match all paths EXCEPT:
    '/((?!api|_next|.*\\..*|google5eb672075790b60\\.html).*)',
  ],
};
