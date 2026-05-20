import Banner from '@/app/components/Banner/Banner';
import AdminPanelScreenSection from '@/app/components/AdminPanelScreenSection/AdminPanelScreenSection'
import React from 'react';
import bannerBg from '@/public/images/security_systems_banner_bacground.png';
import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import { QrScanSection } from '@/app/components/QrScanSection/QrScanSection'


export const metadata: Metadata = {
    title: 'CRM Համակարգ | Crm Systems | CRM Система',
    description: '111 Մենք առաջարկում ենք բարձրորակ անվտանգության համակարգեր՝ նախատեսված ձեր բիզնեսի և տան պահանջներին համապատասխան: Մեր լուծումները ներառում են վիդեոհսկողություն, մուտքի վերահսկում, հրդեհային ահազանգեր և այլն: Ժամանակակից տեխնոլոգիաներ, մասնագիտական տեղադրում և աջակցություն: Наши решения включают видеонаблюдение, контроль доступа, пожарную сигнализацию и многое другое. Современные технологии, профессиональная установка и поддержка. We offer high-quality security systems tailored to your business and home needs. Our solutions include video surveillance, access control, fire alarms, and more. Modern technologies, professional installation, and support. turniket gnel | turniketner vacharq | mutqi hamakarg | տուռնիկետ տուռնիկետների վաճառք | տուռնիկետներ գնել մուտքի համակարգ | անվտանգության համակարգ | турникеты ереван | турникет | купить турникет | продажа турникетов | система безопасности',
    openGraph: {
      title: 'CRM Համակարգ | Crm Systems | CRM Система',
    description: '222 Մենք առաջարկում ենք բարձրորակ անվտանգության համակարգեր՝ նախատեսված ձեր բիզնեսի և տան պահանջներին համապատասխան: Մեր լուծումները ներառում են վիդեոհսկողություն, մուտքի վերահսկում, հրդեհային ահազանգեր և այլն: Ժամանակակից տեխնոլոգիաներ, մասնագիտական տեղադրում և աջակցություն: Наши решения включают видеонаблюдение, контроль доступа, пожарную сигнализацию и многое другое. Современные технологии, профессиональная установка и поддержка. We offer high-quality security systems tailored to your business and home needs. Our solutions include video surveillance, access control, fire alarms, and more. Modern technologies, professional installation, and support. turniket gnel | turniketner vacharq | mutqi hamakarg | տուռնիկետ տուռնիկետների վաճառք | տուռնիկետներ գնել մուտքի համակարգ | անվտանգության համակարգ | турникеты ереван | турникет | купить турникет | продажа турникетов | система безопасности',
    url: "https://turniket.am/crm-system",
    siteName: "turniket.am",
    type: "website",
    locale: "am",
    images: [
      {
        url: "/public/images/navlogo.png",
        width: 700,
        height: 650,
        alt: "CRM Համակարգ | Crm Systems | CRM Система"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: 'CRM Համակարգ | Crm Systems | CRM Система',
    description: '333 Մենք առաջարկում ենք բարձրորակ անվտանգության համակարգեր՝ նախատեսված ձեր բիզնեսի և տան պահանջներին համապատասխան: Մեր լուծումները ներառում են վիդեոհսկողություն, մուտքի վերահսկում, հրդեհային ահազանգեր և այլն: Ժամանակակից տեխնոլոգիաներ, մասնագիտական տեղադրում և աջակցություն: Наши решения включают видеонаблюдение, контроль доступа, пожарную сигнализацию и многое другое. Современные технологии, профессиональная установка и поддержка. We offer high-quality security systems tailored to your business and home needs. Our solutions include video surveillance, access control, fire alarms, and more. Modern technologies, professional installation, and support. turniket gnel | turniketner vacharq | mutqi hamakarg | տուռնիկետ տուռնիկետների վաճառք | տուռնիկետներ գնել մուտքի համակարգ | անվտանգության համակարգ | турникеты ереван | турникет | купить турникет | продажа турникетов | система безопасности',
    images: ["/public/images/navlogo.png"]
  },
    alternates: {
        canonical: 'https://turniket.am/',
        languages: {
          'am': 'https://turniket.am/am/crm-system',
          'en': 'https://turniket.am/en/crm-system',
        },
      },
  };

interface IContent {
    title: string;
    description: string;
    btn: string;
    btnWhite: boolean
}

const CRMSystem = () => {
  const t = useTranslations("CRMSystemBanner");
    const content: IContent = {
        title: t("title"),
        description: t("description"),
        btn: t("btn"),
        btnWhite: true
    };

    return (
            <div className="security_systems overflow-hidden">
                <Banner bg={bannerBg.src} content={content} />
                <QrScanSection />
                <AdminPanelScreenSection />
            </div>
    );
};

export default CRMSystem;