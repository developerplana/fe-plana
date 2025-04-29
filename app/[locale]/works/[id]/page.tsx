import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import Content from "./content"

export default function HeaderWrapper() {
  const locale = useLocale();
  const messages = useMessages()
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Content></Content>
    </NextIntlClientProvider>
  );
}
