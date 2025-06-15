import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";

import Content from "./content";
import type { Metadata } from "next";

async function getPageData(params: string) {
  
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:8000';

const res = await fetch(`${baseUrl}/api/blogs/detail/${params}`, {
  next: { revalidate: 60 },
});

  return res.json();
}


export async function generateMetadata(
  props: { params: Promise<{ locale: string, slug: string }> }
): Promise<Metadata> {
  const { locale,slug } = await props.params;

  const data = await getPageData(slug);
  const safeData = data ?? {};

  const keywordsArray = typeof safeData.meta_keywords === 'string'
    ? safeData.meta_keywords.split(',').map((kw: string) => kw.trim())
    : safeData.meta_keywords || [];

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.plana.vision';

  return {
    title: safeData.meta_title,
    description: safeData.meta_description,
    keywords: keywordsArray,
    alternates: {
      canonical: `${baseUrl}/${locale}/${slug}`,
    },
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
