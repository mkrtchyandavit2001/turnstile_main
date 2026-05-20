import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import "../globals.css";

import NavTop from "../components/NavTop/NavTop";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import StoreProvider from "../StoreProvider/StoreProvider";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import BottomMenu from "../components/BottomMenu/BottomMenu";
import ConsultingModal from "../components/ConsultingModal/ConsultingModal";
import { Toaster } from "sonner";
import Analytics from "../components/Analytics";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type LocaleParams = { locale: string };

type MessagesWithMetadata = Record<string, unknown> & {
  metadata?: {
    title?: string;
    description?: string;
  };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<LocaleParams>;
}): Promise<Metadata> {
  const { locale } = await params;

  const messages = (await getMessages({ locale })) as MessagesWithMetadata;

  return {
    title: messages.metadata?.title || "Default Title",
    description: messages.metadata?.description || "Default Description",
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/favicon.png",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<LocaleParams>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XGYTB9SK6C"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XGYTB9SK6C', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        <StoreProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Analytics />
            <Toaster />
            <ConsultingModal />
            <NavTop />
            <NavBar />
            <BurgerMenu />
            <BottomMenu />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
}

