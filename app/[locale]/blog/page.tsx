import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import Content from "./content";
import type { Metadata } from "next";


async function getPageData() {
  
  const pathSegment = 'blog'
  
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:8000';

const res = await fetch(`${baseUrl}/api/metatag/${pathSegment}`, {
  next: { revalidate: 60 },
});

  return res.json();
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {

  const data = await getPageData();
  const safeData = data ?? [];  
  const keywordsArray = typeof safeData.meta_keywords === 'string'
  ? safeData.meta_keywords.split(',').map((kw: string) => kw.trim())
  : safeData.meta_keywords || [];
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://plana.vision';

  return {
    title: safeData.meta_title,
    description: safeData.meta_description,
    keywords: keywordsArray,
    alternates: {
      canonical:`${baseUrl}/${(await params).locale}/blog`, 
    }
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
