import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";

import {
  NextIntlClientProvider,
  useMessages,
} from "next-intl";


import Navbar from '../[locale]/components/Navbar';
import Footer from '../[locale]/components/Footer';
import Social from '../[locale]/components/Social';
import Canonical from '../[locale]/components/Canonical';
import '../[locale]/generalplana.css'; // Import global styles
import '../[locale]/homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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



async function getPageData(locale: string) {
  
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";
  const res = await fetch(`${baseUrl}/api/metatag/${locale}/home`, {
    next: { revalidate: 60 },
  });
  return res.json();
}
 
export async function generateMetadata(
  { params }: { params: { locale: string } }   // ✅ FIXED
): Promise<Metadata> {
  const data = await getPageData(params.locale);
  const keywordsArray = typeof data.meta_keywords === 'string'
  ? data.meta_keywords.split(',').map((kw: string) => kw.trim())
  : data.meta_keywords || [];

  return {
    title: data.meta_title,
    description: data.meta_description,
    keywords: keywordsArray,
    robots: 'index, follow',
    icons: {
      icon: '/images/favicon.ico',
    },
  }
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale; // ✅ Correct way to get locale
  const messages = useMessages();

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
        {/* JSON-LD: ProfessionalService */}
        <Script id="ld-json-professional-service" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Plana Production House",
            "url": "https://plana.vision/",
            "logo": "https://plana.vision/images/PlanaRED.webp", // Use static image if possible
            "image": "https://plana.vision/images/PlanaRED.webp",
            "description": "Plana is a creative production house based in Jakarta, specialising in commercial photo and video content for brand campaigns, fashion shoots, and digital advertising.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jl. Lebak bulus III No. 88 - Unit C Cilandak Barat - Jakarta Selatan",
              "addressLocality": "Jakarta Selatan",
              "addressRegion": "DKI Jakarta",
              "postalCode": "12440",
              "addressCountry": "ID"
            },
            "email": "ambi@plana.vision",
            "telephone": "+6221-39719799",
            "openingHours": "Mo-Fr 10:00-18:00",
            "sameAs": [
              "https://www.instagram.com/plana.vision/",
              "https://www.linkedin.com/company/planafilms/",
              "https://www.youtube.com/@plana.vision"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Creative Production Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Video Production" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Editorial Photoshoots" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Campaign Visual Content" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fashion Campaign Shoots" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Product Photography & Videography" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Visual Branding & Storytelling" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Creative Direction & Art Production" }}
              ]
            }
          })}
        </Script>

        {/* JSON-LD: FAQPage */}
        <Script id="ld-json-faq" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What kind of projects does Plana specialize in?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Plana focuses on commercial photo and video production for fashion brands, lifestyle campaigns, and digital ads."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Plana based?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Plana is headquartered in Jakarta, Indonesia, and works with brands both locally and internationally."
                }
              },
              {
                "@type": "Question",
                "name": "Can I book Plana for an international shoot?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Plana is experienced in handling overseas projects and remote collaboration with global clients."
                }
              }
            ]
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
