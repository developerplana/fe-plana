import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import Content from "./content";

async function getPageData() {
  
    const pathSegment = 'about'
    
    const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:8000';

    const res = await fetch(`${baseUrl}/api/metatag/${pathSegment}`, {
      next: { revalidate: 60 },
    });
    
    return res.json();
  }
 
export async function generateMetadata() {
    const data = await getPageData();
    const keywordsArray = typeof data.meta_keywords === 'string'
    ? data.meta_keywords.split(',').map((kw: string) => kw.trim())
    : data.meta_keywords || [];
    return {
      title: data.meta_title,
      description: data.meta_description,
      keywords: keywordsArray,
    };
}

export default function Page() {
  const locale = useLocale();
  const messages = useMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Content ></Content>
    </NextIntlClientProvider>

  );
}
