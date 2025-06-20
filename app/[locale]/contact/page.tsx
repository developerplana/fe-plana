import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import Content from "./content";
import type { Metadata } from "next";
import Head from 'next/head';

async function getPageData() {
  
    const pathSegment = 'contact'
    
    const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:8000';
  
  const res = await fetch(`${baseUrl}/api/metatag/${pathSegment}`, {
    next: { revalidate: 60 },
  });
  
    return res.json();
  }

  
  export async function generateMetadata(): Promise<Metadata> {

  
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
        canonical:`${baseUrl}/contact`, 
      }
    };
  }
  
export default function Contact() {
    const locale = useLocale();
    const messages = useMessages()
  
    return (
      <>
      <Head>
        <title>Contact Us – Plana Production House</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Plana Production House",
              "description": "Get in touch with Plana Production House via phone, email, or our studio in Jakarta.",
              "url": "https://plana.vision/contact"
            }),
          }}
        />
      </Head>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Content ></Content>
      </NextIntlClientProvider></>
  
    );
  }
  