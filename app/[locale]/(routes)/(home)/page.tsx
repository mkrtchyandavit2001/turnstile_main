import React from 'react';
import HomePageBanner from '@/app/components/HomePageBanner/HomePageBanner';
import InfoServices from '@/app/components/InfoServices/InfoServices';
import CategorySection from '@/app/components/CategorySection/CategorySection';
import OurProductsSection from '@/app/components/OurProductsSection/OurProductsSection';
import DeviceSection from '@/app/components/DeviceSection/DeviceSection';
// import ContactSection from '@/app/components/ContactSection/ContactSection';
import { Metadata } from 'next';
import PartnersComponent from '@/app/components/PartnersComponent/PartnersComponent';
import PeoplesCommentsComponent from '@/app/components/PeoplesCommentsComponent/PeoplesCommentsComponent';
import OurProductsSections from '@/app/components/OurProductsSection/OurProductsSections';
import CategorySections from '@/app/components/CategorySection/CategorySections';

export const metadata: Metadata = {
  title: 'Տուրնիկետների Վաճառք | Turnstiles for Sale | Турникеты на продажу',
  description: 'Տուրնիկետների վաճառքի մեր կայքը տրամադրում է նորարարական և հուսալի լուծումներ անցումների վերահսկման համար։ Մեր տեսականին ներառում է բարձր որակի տուռնիկետներ, որոնք ապահովում են անվտանգություն, արդյունավետություն և հարմարավետություն տարբեր միջավայրերում՝ բիզնես կենտրոններից մինչև մարզադահլիճներ և պետական հիմնարկներ։ Բարձր որակ և դիմացկունություն | Ժամանակակից դիզայն և տեխնոլոգիաներ | Արագ առաքում և տեղադրում | Մասնագիտական խորհրդատվություն  -- Наш сайт продажи турникетов предлагает инновационные и надежные решения для контроля доступа. В нашем ассортименте есть высококачественные турникеты, которые обеспечивают безопасность, эффективность и удобство в различных средах — от бизнес-центров до спортивных залов и государственных учреждений. Высокое качество и долговечность | Современный дизайн и технологии | Быстрая доставка и установка | Профессиональные консультации Our turnstile sales website provides innovative and reliable solutions for access control. Our range includes high-quality turnstiles that ensure security, efficiency, and convenience in various environments—from business centers to gyms and government institutions. High quality and durability | Modern design and technology |  Fast delivery and installation | Professional consultation --- turniket gnel | turniketner vacharq | mutqi hamakarg | տուռնիկետ տուռնիկետների վաճառք | տուռնիկետներ գնել մուտքի համակարգ | անվտանգության համակարգ | турникеты ереван | турникет | купить турникет | продажа турникетов | система безопасности',
  openGraph: {
    title: "Տուրնիկետների Վաճառք | Turnstiles for Sale | Турникеты на продажу",
    description: "Տուրնիկետների վաճառքի մեր կայքը տրամադրում է նորարարական և հուսալի լուծումներ անցումների վերահսկման համար։ Մեր տեսականին ներառում է բարձր որակի տուռնիկետներ, որոնք ապահովում են անվտանգություն, արդյունավետություն և հարմարավետություն տարբեր միջավայրերում՝ բիզնես կենտրոններից մինչև մարզադահլիճներ և պետական հիմնարկներ։ Բարձր որակ և դիմացկունություն | Ժամանակակից դիզայն և տեխնոլոգիաներ | Արագ առաքում և տեղադրում | Մասնագիտական խորհրդատվություն  -- Наш сайт продажи турникетов предлагает инновационные и надежные решения для контроля доступа. В нашем ассортименте есть высококачественные турникеты, которые обеспечивают безопасность, эффективность и удобство в различных средах — от бизнес-центров до спортивных залов и государственных учреждений. Высокое качество и долговечность | Современный дизайн и технологии | Быстрая доставка и установка | Профессиональные консультации Our turnstile sales website provides innovative and reliable solutions for access control. Our range includes high-quality turnstiles that ensure security, efficiency, and convenience in various environments—from business centers to gyms and government institutions. High quality and durability | Modern design and technology |  Fast delivery and installation | Professional consultation --- turniket gnel | turniketner vacharq | mutqi hamakarg | տուռնիկետ տուռնիկետների վաճառք | տուռնիկետներ գնել մուտքի համակարգ | անվտանգության համակարգ | турникеты ереван | турникет | купить турникет | продажа турникетов | система безопасности",
    url: "https://turniket.am/",
    siteName: "turniket.am",
    type: "website",
    locale: "am",
    images: [
      {
        url: "/public/images/navlogo.png",
        width:700,
        height:650,
        alt:"Տուրնիկետների Վաճառք | Turnstiles for Sale | Турникеты на продажу"
      }
    ]
  },
  twitter:{
    card:"summary_large_image",
    title: "Տուրնիկետների Վաճառք | Turnstiles for Sale | Турникеты на продажу",
    description: "Տուրնիկետների վաճառքի մեր կայքը տրամադրում է նորարարական և հուսալի լուծումներ անցումների վերահսկման համար։ Մեր տեսականին ներառում է բարձր որակի տուռնիկետներ, որոնք ապահովում են անվտանգություն, արդյունավետություն և հարմարավետություն տարբեր միջավայրերում՝ բիզնես կենտրոններից մինչև մարզադահլիճներ և պետական հիմնարկներ։ Բարձր որակ և դիմացկունություն | Ժամանակակից դիզայն և տեխնոլոգիաներ | Արագ առաքում և տեղադրում | Մասնագիտական խորհրդատվություն  -- Наш сайт продажи турникетов предлагает инновационные и надежные решения для контроля доступа. В нашем ассортименте есть высококачественные турникеты, которые обеспечивают безопасность, эффективность и удобство в различных средах — от бизнес-центров до спортивных залов и государственных учреждений. Высокое качество и долговечность | Современный дизайн и технологии | Быстрая доставка и установка | Профессиональные консультации Our turnstile sales website provides innovative and reliable solutions for access control. Our range includes high-quality turnstiles that ensure security, efficiency, and convenience in various environments—from business centers to gyms and government institutions. High quality and durability | Modern design and technology |  Fast delivery and installation | Professional consultation --- turniket gnel | turniketner vacharq | mutqi hamakarg | տուռնիկետ տուռնիկետների վաճառք | տուռնիկետներ գնել մուտքի համակարգ | անվտանգության համակարգ | турникеты ереван | турникет | купить турникет | продажа турникетов | система безопасности",
    images:["/public/images/navlogo.png"]
  },
  alternates: {
    canonical: 'https://turniket.am/',
    languages: {
      'am': 'https://turniket.am/am',
      'en': 'https://turniket.am/en',
    },
  },
};


const HomePage = async () => {

  return (
    <div>
      <HomePageBanner />
      <PartnersComponent/>
      <InfoServices />
      <CategorySection />
      <OurProductsSections />
      <DeviceSection title="titleHomePage" description="descriptionHomePage" />
      <PeoplesCommentsComponent/>
      {/* <ContactSection /> */}
    </div>
  )
}

export default HomePage


