

import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = ["am", "en", "ru"];

export default getRequestConfig(async ({ requestLocale }: { requestLocale: Promise<string | undefined> }) => {
  const resolvedLocale = await requestLocale; 
  const locale = resolvedLocale && locales.includes(resolvedLocale) ? resolvedLocale : "en"; 

  if (!locales.includes(locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});


