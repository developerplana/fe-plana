import type { Metadata } from "next";
import type { ReactNode } from "react";
// import { Geist, Geist_Mono } from "next/font/google";

import {
  NextIntlClientProvider,
  useMessages,
} from "next-intl";
import { useLocale } from "next-intl";

import Navbar from '../[locale]/components/Navbar';
import Footer from '../[locale]/components/Footer';
import Social from '../[locale]/components/Social';
import Canonical from '../[locale]/components/Canonical';
import Script from "next/script";

import { Exo, Montserrat } from 'next/font/google'

const exo = Exo({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-exo',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-montserrat',
  display: 'swap',
})



async function getPageData() {
  
  const pathSegment = 'home'
  
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:8000';

  const res = await fetch(`${baseUrl}/api/metatag/${pathSegment}`, {
    next: { revalidate: 60 },
  });

  console.log("ini res",res)
  return res.json();
}
 
export async function generateMetadata(): Promise<Metadata> {

  const data = await getPageData();
  const keywordsArray = typeof data.meta_keywords === 'string'
  ? data.meta_keywords.split(',').map((kw: string) => kw.trim())
  : data.meta_keywords || [];

  return {
    title: data.meta_title,
    description: data.meta_description,
    keywords: keywordsArray,
    icons: {
      icon: '/images/favicon.ico',
    },
    alternates: {
      canonical: `https://plana.vision`, // adjust with full path if needed
    }
  }
}

interface RootLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default  function RootLayout({ children }: RootLayoutProps) {
  const locale = useLocale();

  const messages = useMessages();
  // const t = useTranslations();


  return (
    <html lang={locale} className={`${exo.variable} ${montserrat.variable} antialiased`}>
      <body>
          <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-VN0N9N12ZG"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-VN0N9N12ZG');
              `}
          </Script>
          
            
        {/* Schema: WebSite */}
        <Script id="ld-json-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://plana.vision/#website",
            url: "https://plana.vision/",
            name: "Plana Production House",
            description: "Plana is a creative production house based in Jakarta, specialising in commercial photo and video content for brand campaigns, fashion shoots, and digital advertising.",
            publisher: {
              "@type": "Organization",
              name: "Plana Production House",
              logo: {
                "@type": "ImageObject",
                url: "https://plana.vision/images/PlanaRED.webp",
              },
            },
          })}
        </Script>

        {/* Schema: Organization */}
        <Script id="ld-json-organization" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://plana.vision/#organization",
            name: "Plana Production House",
            url: "https://plana.vision/",
            logo: {
              "@type": "ImageObject",
              url: "https://plana.vision/images/PlanaRED.webp",
            },
            sameAs: [
              "https://www.instagram.com/plana.vision/",
              "https://www.linkedin.com/company/planafilms/",
              "https://www.youtube.com/@plana.vision",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+6221-39719799",
              contactType: "Customer Service",
              areaServed: "ID",
              availableLanguage: "Indonesian",
            },
          })}
        </Script>
        <NextIntlClientProvider locale={locale} messages={messages}>
        <Canonical />
          <Navbar />
          <Social />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
