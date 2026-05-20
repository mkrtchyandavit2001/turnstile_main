
import Banner from '@/app/components/Banner/Banner';
import catalogBanner from "@/public/images/catalogBanner.jpeg";
import React from 'react';
import { useTranslations } from 'next-intl';
import CatalogItem from '@/app/components/CatalogItem/CatalogItem';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Կատալոգ | Turnstiles Catalog | Каталог Турникетов',
  description: 'Մեր կատալոգում կարող եք գտնել բարձրորակ տուրնիկետներ՝ նախատեսված տարբեր միջավայրերի համար: Անցումների վերահսկման լուծումներ բիզնես կենտրոնների, մարզադահլիճների և պետական հիմնարկների համար: Բարձր որակ, դիմացկունություն և ժամանակակից դիզայն: Արագ առաքում և տեղադրում: Մասնագիտական խորհրդատվություն: Наш каталог предлагает высококачественные турникеты для различных сред. Решения для контроля доступа в бизнес-центры, спортивные залы и государственные учреждения. Высокое качество, долговечность и современный дизайн. Быстрая доставка и установка. Профессиональные консультации. Our catalog features high-quality turnstiles designed for various environments. Access control solutions for business centers, gyms, and government institutions. High quality, durability, and modern design. Fast delivery and installation. Professional consultation. turniket gnel | turniketner vacharq | mutqi hamakarg | տուռնիկետ տուռնիկետների վաճառք | տուռնիկետներ գնել մուտքի համակարգ | անվտանգության համակարգ | турникеты ереван | турникет | купить турникет | продажа турникетов | система безопасности',
  openGraph: {
    title: 'Կատալոգ | Turnstiles Catalog | Каталог Турникетов',
    description: 'Մեր կատալոգում կարող եք գտնել բարձրորակ տուրնիկետներ՝ նախատեսված տարբեր միջավայրերի համար: Անցումների վերահսկման լուծումներ բիզնես կենտրոնների, մարզադահլիճների և պետական հիմնարկների համար: Բարձր որակ, դիմացկունություն և ժամանակակից դիզայն: Արագ առաքում և տեղադրում: Մասնագիտական խորհրդատվություն: Наш каталог предлагает высококачественные турникеты для различных сред. Решения для контроля доступа в бизнес-центры, спортивные залы и государственные учреждения. Высокое качество, долговечность и современный дизайн. Быстрая доставка и установка. Профессиональные консультации. Our catalog features high-quality turnstiles designed for various environments. Access control solutions for business centers, gyms, and government institutions. High quality, durability, and modern design. Fast delivery and installation. Professional consultation. turniket gnel | turniketner vacharq | mutqi hamakarg | տուռնիկետ տուռնիկետների վաճառք | տուռնիկետներ գնել մուտքի համակարգ | անվտանգության համակարգ | турникеты ереван | турникет | купить турникет | продажа турникетов | система безопасности',
    url: "https://turniket.am/catalog",
    siteName: "turniket.am",
    type: "website",
    locale: "am",
    images: [
      {
        url: "/public/images/navlogo.png",
        width: 700,
        height: 650,
        alt: "Կատալոգ | Turnstiles Catalog | Каталог Турникетов"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: 'Կատալոգ | Turnstiles Catalog | Каталог Турникетов',
    description: 'Մեր կատալոգում կարող եք գտնել բարձրորակ տուրնիկետներ՝ նախատեսված տարբեր միջավայրերի համար: Անցումների վերահսկման լուծումներ բիզնես կենտրոնների, մարզադահլիճների և պետական հիմնարկների համար: Բարձր որակ, դիմացկունություն և ժամանակակից դիզայն: Արագ առաքում և տեղադրում: Մասնագիտական խորհրդատվություն: Наш каталог предлагает высококачественные турникеты для различных сред. Решения для контроля доступа в бизнес-центры, спортивные залы и государственные учреждения. Высокое качество, долговечность и современный дизайн. Быстрая доставка и установка. Профессиональные консультации. Our catalog features high-quality turnstiles designed for various environments. Access control solutions for business centers, gyms, and government institutions. High quality, durability, and modern design. Fast delivery and installation. Professional consultation. turniket gnel | turniketner vacharq | mutqi hamakarg | տուռնիկետ տուռնիկետների վաճառք | տուռնիկետներ գնել մուտքի համակարգ | անվտանգության համակարգ | турникеты ереван | турникет | купить турникет | продажа турникетов | система безопасности',
    images: ["/public/images/navlogo.png"]
  },
  alternates: {
    canonical: 'https://turniket.am/',
    languages: {
      'am': 'https://turniket.am/am/catalog',
      'en': 'https://turniket.am/en/catalog',
    },
  },
};
// Define the interface for the banner content
interface IBannerContent {
  title: string;
  description: string;
  btn: string;
}

// CatalogPage component
const CatalogPage = () => {
  const t = useTranslations('');

  // Banner content with translated strings
  const bannerContent: IBannerContent = {
    title: t('TurnstileBanner.title'),
    description: t('TurnstileBanner.content'),
    btn: t('TurnstileBanner.see_more_btn')
  };

  return (
      <div className='turnstile_page'>
      <Banner bg={catalogBanner.src} content={bannerContent} page="catalog" />
      <CatalogItem />
    </div>
  );
};

export default CatalogPage;

