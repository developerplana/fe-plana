import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import Content from "./content";
import Script from "next/script";

export default function Page() {
  const locale = useLocale();
  const messages = useMessages()

  return (
    <>
      {/* JSON-LD: WebSite */}
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                url: "https://plana.vision/images/logo.png",
              },
            },
            potentialAction: {
              "@type": "SearchAction",
              target: "https://plana.vision/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }} />

      {/* JSON-LD: Organization */}
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://plana.vision/#organization",
            name: "Plana Production House",
            url: "https://plana.vision/",
            logo: {
              "@type": "ImageObject",
              url: "https://plana.vision/images/logo.png",
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
          }),
        }} />
      
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Content></Content>
      </NextIntlClientProvider>
    </>
  );
}
