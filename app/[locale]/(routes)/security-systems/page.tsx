import Banner from '@/app/components/Banner/Banner';
import React from 'react';
import bannerBg from '@/public/images/security_systems_banner_bacground.png';
import OurSolutionsSection from '@/app/components/OurSolutionsSection/OurSolutionsSection';
import SecurityInfoSection from '@/app/components/SecurityInfoSection/SecurityInfoSection';
import WhyChooseUsSection from '@/app/components/WhyChooseUsSection/WhyChooseUsSection';
import MobileAppSection from '@/app/components/MobileAppSection/MobileAppSection';
import FrequentlyAsked from '@/app/components/FrequentlyAsked/FrequentlyAsked';
// import ContactSection from '@/app/components/ContactSection/ContactSection';
import { useTranslations } from 'next-intl';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Անվտանգության Համակարգեր | Security Systems | Системы Безопасности',
    description: 'Մենք առաջարկում ենք բարձրորակ անվտանգության համակարգեր՝ նախատեսված ձեր բիզնեսի և տան պահանջներին համապատասխան: Մեր լուծումները ներառում են վիդեոհսկողություն, մուտքի վերահսկում, հրդեհային ահազանգեր և այլն: Ժամանակակից տեխնոլոգիաներ, մասնագիտական տեղադրում և աջակցություն: Наши решения включают видеонаблюдение, контроль доступа, пожарную сигнализацию и многое другое. Современные технологии, профессиональная установка и поддержка. We offer high-quality security systems tailored to your business and home needs. Our solutions include video surveillance, access control, fire alarms, and more. Modern technologies, professional installation, and support. turniket gnel | turniketner vacharq | mutqi hamakarg | տուռնիկետ տուռնիկետների վաճառք | տուռնիկետներ գնել մուտքի համակարգ | անվտանգության համակարգ | турникеты ереван | турникет | купить турникет | продажа турникетов | система безопасности',
    openGraph: {
    title: 'Անվտանգության Համակարգեր | Security Systems | Системы Безопасности',
    description: 'Մենք առաջարկում ենք բարձրորակ անվտանգության համակարգեր՝ նախատեսված ձեր բիզնեսի և տան պահանջներին համապատասխան: Մեր լուծումները ներառում են վիդեոհսկողություն, մուտքի վերահսկում, հրդեհային ահազանգեր և այլն: Ժամանակակից տեխնոլոգիաներ, մասնագիտական տեղադրում և աջակցություն: Наши решения включают видеонаблюдение, контроль доступа, пожарную сигнализацию и многое другое. Современные технологии, профессиональная установка и поддержка. We offer high-quality security systems tailored to your business and home needs. Our solutions include video surveillance, access control, fire alarms, and more. Modern technologies, professional installation, and support. turniket gnel | turniketner vacharq | mutqi hamakarg | տուռնիկետ տուռնիկետների վաճառք | տուռնիկետներ գնել մուտքի համակարգ | անվտանգության համակարգ | турникеты ереван | турникет | купить турникет | продажа турникетов | система безопасности',
    url: "https://turniket.am/security-systems",
    siteName: "turniket.am",
    type: "website",
    locale: "am",
    images: [
      {
        url: "/public/images/navlogo.png",
        width: 700,
        height: 650,
        alt: "Անվտանգության Համակարգեր | Security Systems | Системы Безопасности"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: 'Անվտանգության Համակարգեր | Security Systems | Системы Безопасности',
    description: 'Մենք առաջարկում ենք բարձրորակ անվտանգության համակարգեր՝ նախատեսված ձեր բիզնեսի և տան պահանջներին համապատասխան: Մեր լուծումները ներառում են վիդեոհսկողություն, մուտքի վերահսկում, հրդեհային ահազանգեր և այլն: Ժամանակակից տեխնոլոգիաներ, մասնագիտական տեղադրում և աջակցություն: Наши решения включают видеонаблюдение, контроль доступа, пожарную сигнализацию и многое другое. Современные технологии, профессиональная установка и поддержка. We offer high-quality security systems tailored to your business and home needs. Our solutions include video surveillance, access control, fire alarms, and more. Modern technologies, professional installation, and support. turniket gnel | turniketner vacharq | mutqi hamakarg | տուռնիկետ տուռնիկետների վաճառք | տուռնիկետներ գնել մուտքի համակարգ | անվտանգության համակարգ | турникеты ереван | турникет | купить турникет | продажа турникетов | система безопасности',
    images: ["/public/images/navlogo.png"]
  },
    alternates: {
        canonical: 'https://turniket.am/',
        languages: {
          'am': 'https://turniket.am/am/security-systems',
          'en': 'https://turniket.am/en/security-systems',
        },
      },
  };

interface IContent {
    title: string;
    description: string;
    btn: string;
    btnWhite: boolean

}

const SecuritySystems = () => {
    const t = useTranslations("SecuritySystemsBanner");
    const content: IContent = {
        title: t("title"),
        description: t("description"),
        btn: t("btn"),
        btnWhite: true

    };

    return (
            <div className="security_systems overflow-hidden">
                <Banner bg={bannerBg.src} content={content} />
                <OurSolutionsSection />
                <SecurityInfoSection />
                <WhyChooseUsSection />
                <MobileAppSection />
                <FrequentlyAsked />
                {/* <ContactSection /> */}
            </div>
    );
};

export default SecuritySystems;