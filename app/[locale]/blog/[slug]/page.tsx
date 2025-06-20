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
  const { slug } = await props.params;

  const data = await getPageData(slug);
  const safeData = data ?? {};

  const keywordsArray = typeof safeData.metaKeywordEN === 'string'
    ? safeData.metaKeywordEN.split(',').map((kw: string) => kw.trim())
    : safeData.metaKeywordEN || [];

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://plana.vision';

  return {
    title: safeData.metaTitleEN,
    description: safeData.metaDescEN,
    keywords: keywordsArray,
    alternates: {
      canonical: `${baseUrl}/${slug}`,
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
