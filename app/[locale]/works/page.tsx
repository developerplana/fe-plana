import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import Content from "./content";

async function getPageData() {
  
    const pathSegment = 'works'
    
    const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:8000';

    const res = await fetch(`${baseUrl}/api/metatag/${pathSegment}`, {
      next: { revalidate: 60 },
    });
    
    
    return res.json();
  }
 
export async function generateMetadata() {
  const data = await getPageData();
 
    return {
      title: data.meta_title,
      description: data.meta_description,
      keywords: data.meta_keywords,
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
