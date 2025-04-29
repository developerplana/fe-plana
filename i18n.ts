// i18n.ts
import { getRequestConfig, RequestConfig } from 'next-intl/server';

export const locales = ['en', 'id']; // Add more locales here if needed
export const defaultLocale = 'en';

// The `getRequestConfig` function expects an object that adheres to `RequestConfig`
export default getRequestConfig(async ({ locale }: { locale?: string } = {}): Promise<RequestConfig> => {
  const messages = await import(`./locales/${locale || defaultLocale}.json`);
  return {
    locale: locale || defaultLocale,
    messages: messages.default,  // return the actual messages
  };
});
