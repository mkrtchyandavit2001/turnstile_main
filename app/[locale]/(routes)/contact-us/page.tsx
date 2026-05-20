import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Banner from '@/app/components/Banner/Banner';
import ContactSection from '@/app/components/ContactSection/ContactSection';
import bannerBg from '@/public/images/contact-us.png';

type MetadataProps = {
    params: Promise<{ locale: string }>;
};

const titles = {
    am: 'Կապ մեզ հետ',
    ru: 'Связаться с нами',
    en: 'Contact Us',
};

const descriptions = {
    am: 'Կապ հաստատեք մեզ հետ անվտանգության համակարգերի, մուտքի վերահսկման և CRM լուծումների համար։ Մենք պատրաստ ենք պատասխանել ձեր բոլոր հարցերին։',
    ru: 'Свяжитесь с нами по вопросам систем безопасности, контроля доступа и CRM решений. Мы готовы ответить на все ваши вопросы.',
    en: 'Contact us for security systems, access control, and CRM solutions. We are ready to answer all your questions.',
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
    const { locale } = await params;

    const title = titles[locale as keyof typeof titles] || titles.en;
    const description = descriptions[locale as keyof typeof descriptions] || descriptions.en;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://turniket.am/${locale}/contact-us`,
            siteName: "turniket.am",
            type: "website",
            locale: locale === 'am' ? 'hy_AM' : locale === 'ru' ? 'ru_RU' : 'en_US',
            images: [
                {
                    url: "/images/contact-us.png",
                    width: 700,
                    height: 650,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/images/contact-us.png"],
        },
        alternates: {
            canonical: `https://turniket.am/${locale}/contact-us`,
            languages: {
                am: 'https://turniket.am/am/contact-us',
                ru: 'https://turniket.am/ru/contact-us',
                en: 'https://turniket.am/en/contact-us',
            },
        },
    };
}

type ContactPageProps = {
    params: { locale: keyof typeof titles };
};


export default async function ContactPage({ params }: ContactPageProps) {
    const locale = params.locale;
    const title = titles[locale] || titles.en;
    const description = descriptions[locale] || descriptions.en;
    const t = await getTranslations();

    const btn = t('TurnstileBanner.see_more_btn');


    return (
        <div >
            <Banner
                bg={bannerBg.src}
                content={{
                    title,
                    description,
                    btn,
                    btnWhite: false

                }}
                page="contact-us"
            />

            <ContactSection />
        </div>
    );
}
