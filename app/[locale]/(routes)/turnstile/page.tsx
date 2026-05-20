import AdminPanelScreenSection from '@/app/components/AdminPanelScreenSection/AdminPanelScreenSection'
// import ContactSection from '@/app/components/ContactSection/ContactSection'
import DeviceSection from '@/app/components/DeviceSection/DeviceSection'
import MadeInArmeniaSection from '@/app/components/MadeInArmeniaSection/MadeInArmeniaSection'
import OurProductsSection from '@/app/components/OurProductsSection/OurProductsSection'
import OurWorksSection from '@/app/components/OurWorksSection/OurWorksSection'
import { QrScanSection } from '@/app/components/QrScanSection/QrScanSection'
import ServicesSection from '@/app/components/ServicesSection/ServicesSection'
import Banner from '@/app/components/Banner/Banner'
import { TurnstileInfoSection } from '@/app/components/TurnstileInfoSection/TurnstileInfoSection'
import TurnstileServicesCicyleSection from '@/app/components/TurnstileServicesCicyleSection/TurnstileServicesCicyleSection'
import { TimeIcon } from '@/app/icons/TimeIcon';
import { DocumentIcon } from '@/app/icons/DocumentIcon';
import { TurnstileIcon } from '@/app/icons/TurnstileIcon';
import { SecurityIcon } from '@/app/icons/SecurityIcon';
import bannerBackground from '@/public/images/turnstileBannerBachgroundImage.png';
import React, { ReactNode } from 'react'
import { useTranslations } from 'next-intl'
import { Metadata } from 'next'

interface BannerItem {
  id: string
  icon: ReactNode;
  title: string;
}

interface IBannerContent {
  title: string;
  description: string;
  btn: string;
  btnWhite: boolean;
}

export const metadata: Metadata = {
  title: 'Տուրնիկետներ | Turnstiles | Турникеты',
  description: 'Մենք առաջարկում ենք բարձրորակ տուրնիկետներ՝ նախատեսված անցումների վերահսկման համար: Մեր արտադրանքը ներառում է ժամանակակից տեխնոլոգիաներ, դիմացկունություն և անվտանգություն: Արագ տեղադրում և մասնագիտական աջակցություն: Наши турникеты обеспечивают надежный контроль доступа. Современные технологии, долговечность и безопасность. Быстрая установка и профессиональная поддержка. Our turnstiles provide reliable access control. Modern technologies, durability, and security. Fast installation and professional support. turniket gnel | turniketner vacharq | mutqi hamakarg | տուռնիկետ տուռնիկետների վաճառք | տուռնիկետներ գնել մուտքի համակարգ | անվտանգության համակարգ | турникеты ереван | турникет | купить турникет | продажа турникетов | система безопасности',
  openGraph: {
    title: "Տուրնիկետներ | Turnstiles | Турникеты",
    description: "Մենք առաջարկում ենք բարձրորակ տուրնիկետներ՝ նախատեսված անցումների վերահսկման համար: Մեր արտադրանքը ներառում է ժամանակակից տեխնոլոգիաներ, դիմացկունություն և անվտանգություն: Արագ տեղադրում և մասնագիտական աջակցություն: Наши турникеты обеспечивают надежный контроль доступа. Современные технологии, долговечность и безопасность. Быстрая установка и профессиональная поддержка. Our turnstiles provide reliable access control. Modern technologies, durability, and security. Fast installation and professional support. turniket gnel | turniketner vacharq | mutqi hamakarg | տուռնիկետ տուռնիկետների վաճառք | տուռնիկետներ գնել մուտքի համակարգ | անվտանգության համակարգ | турникеты ереван | турникет | купить турникет | продажа турникетов | система безопасности",
    url: "https://turniket.am/turnstile",
    siteName: "turniket.am",
    type: "website",
    locale: "am",
    images: [
      {
        url: "/public/images/navlogo.png",
        width: 700,
        height: 650,
        alt: "Տուրնիկետներ | Turnstiles | Турникеты"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Տուրնիկետներ | Turnstiles | Турникеты",
    description: "Մենք առաջարկում ենք բարձրորակ տուրնիկետներ՝ նախատեսված անցումների վերահսկման համար: Մեր արտադրանքը ներառում է ժամանակակից տեխնոլոգիաներ, դիմացկունություն և անվտանգություն: Արագ տեղադրում և մասնագիտական աջակցություն: Наши турникеты обеспечивают надежный контроль доступа. Современные технологии, долговечность и безопасность. Быстрая установка и профессиональная поддержка. Our turnstiles provide reliable access control. Modern technologies, durability, and security. Fast installation and professional support. turniket gnel | turniketner vacharq | mutqi hamakarg | տուռնիկետ տուռնիկետների վաճառք | տուռնիկետներ գնել մուտքի համակարգ | անվտանգության համակարգ | турникеты ереван | турникет | купить турникет | продажа турникетов | система безопасности",
    images: ["/public/images/navlogo.png"]
  },
  alternates: {
    canonical: 'https://turniket.am/',
    languages: {
      'am': 'https://turniket.am/am/turnstile',
      'en': 'https://turniket.am/en/turnstile',
    },
  },
};

const TurnstilePage = () => {
  const t = useTranslations('');
  const bannerContent: IBannerContent = {
    title: t('TurnstileBanner.title'),
    description: t('TurnstileBanner.content'),
    btn: t('TurnstileBanner.see_more_btn'),
    btnWhite: true
  };


  const bannerItemsData: BannerItem[] = [
    {
      id: '1',
      icon: <TimeIcon width={50} height={50} color='#5939F5' />,
      title: t('TurnstileBanner.bannerItems.0')
    },

    {
      id: '2',
      icon: <DocumentIcon width={38} height={48} color='#5939F5' />,
      title: t('TurnstileBanner.bannerItems.1')
    },

    {
      id: '3',
      icon: <TurnstileIcon width={48} height={48} color='#5939F5' />,
      title: t('TurnstileBanner.bannerItems.2')
    },

    {
      id: '4',
      icon: <SecurityIcon width={40} height={48} color='#5939F5' />,
      title: t('TurnstileBanner.bannerItems.3')
    },


  ];

  return (

    <div className='turnstile_page'>
      <Banner bannerData={bannerItemsData} bg={bannerBackground.src} content={bannerContent} page="turnstile" />
      <OurProductsSection/>
      <QrScanSection />
      <MadeInArmeniaSection />
      <TurnstileInfoSection />
      <ServicesSection />
      <TurnstileServicesCicyleSection />
      <AdminPanelScreenSection />
      <DeviceSection title="titleTurnstilePage" description="descriptionTurnstilePage" />
      <OurWorksSection />
      {/* <ContactSection /> */}
    </div>
  );
};

export default TurnstilePage;