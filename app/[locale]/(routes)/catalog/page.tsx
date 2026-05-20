// app/[locale]/(routes)/catalog-new/page.tsx
import Banner from "@/app/components/Banner/Banner";
import catalogBanner from "@/public/images/catalogBanner.jpeg";
import CatalogItemNew from "@/app/components/CatalogItem/CatalogItemNew";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

// Расширяем тип Product с недостающими полями
type Product = {
  id: number;
  code: string;
  image: string;
  slug: string;
  category_slug: string;
  name?: string;
  description?: string;
  price?: number;
  // Добавляем другие поля которые могут быть нужны
  [key: string]: string | number | boolean | undefined; // Для любых дополнительных полей
};

type Category = {
  id: number;
  name: string;
  slug: string;
};

// Обновляем тип параметров для generateMetadata
type MetadataProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  // Деструктурируем параметры с await
  const { locale } = await params;

  // Динамические title и description в зависимости от локали
  const titles = {
    am: "Կատալոգ | Turnstiles Catalog | Каталог Турникетов",
    ru: "Каталог Турникетов | Turnstiles Catalog",
    en: "Turnstiles Catalog",
  };

  const descriptions = {
    am: "Մեր կատալոգում կարող եք գտնել բարձրորակ տուրնիկետներ՝ նախատեսված տարբեր միջավայրերի համար: Անցումների վերահսկման լուծումներ բիզնես կենտրոնների, մարզադահլիճների և պետական հիմնարկների համար: Բարձր որակ, дիմացկունություն և ժամանակակից դիզայն: Արագ առաքում և տեղադրում: Մասնագիտական խորհրդատվություն:",
    ru: "Наш каталог предлагает высококачественные турникеты для различных сред. Решения для контроля доступа в бизнес-центры, спортивные залы и государственные учреждения. Высокое качество, долговечность и современный дизайн. Быстрая доставка и установка. Профессиональные консультации.",
    en: "Our catalog features high-quality turnstiles designed for various environments. Access control solutions for business centers, gyms, and government institutions. High quality, durability, and modern design. Fast delivery and installation. Professional consultation.",
  };

  const title = titles[locale as keyof typeof titles] || titles.en;
  const description =
    descriptions[locale as keyof typeof descriptions] || descriptions.en;

  return {
    title,
    description: `${description} turniket gnel | turniketner vacharq | mutqi hamakarg | տուռնիկետ տուռնիկետների վաճառք | տուռնիկետներ գնել մուտքի համակարգ | անվտանգության համակարգ | турникеты ереван | турникет | купить турникет | продажа турникетов | система безопасности`,
    openGraph: {
      title,
      description: `${description} turniket gnel | turniketner vacharq | mutqi hamakarg | տուռնիկետ տուռնիկետների վաճառք | տուռնիկետներ գնել մուտքի համակարգ | անվտանգության համակարգ | турникеты ереван | турникет | купить турникет | продажа турniketов | система безопасности`,
      url: `https://turniket.am/${locale}/catalog`,
      siteName: "turniket.am",
      type: "website",
      locale: locale === "am" ? "hy_AM" : locale === "ru" ? "ru_RU" : "en_US",
      images: [
        {
          url: "/images/navlogo.png",
          width: 700,
          height: 650,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: `${description} turniket gnel | turniketner vacharq | mutqi hamakarg | տուռնիկետ տուռնիկետների վաճառք | տուռնիկետներ գնել մուտքի համակարգ | անվտանգության համակարգ | турnikеты ереван | турникет | купить турникет | продажа турникетов | система безопасности`,
      images: ["/images/navlogo.png"],
    },
    alternates: {
      canonical: `https://turniket.am/${locale}/catalog`,
      languages: {
        am: "https://turniket.am/am/catalog",
        ru: "https://turniket.am/ru/catalog",
        en: "https://turniket.am/en/catalog",
      },
    },
  };
}

const localeMap: Record<string, string> = {
  am: "hy",
  ru: "ru",
  en: "en",
};

async function getCategories(locale: string): Promise<Category[]> {
  const apiLocale = localeMap[locale] ?? "am";

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      "Accept-Language": apiLocale,
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    console.log("CATEGORY API ERROR:", res.status);
    return [];
  }

  const data = await res.json();
  return data.data || [];
}

async function getProducts(
  locale: string,
  code?: string,
  category_id?: string,
): Promise<Product[]> {
  const apiLocale = localeMap[locale] ?? "am";
  const query = new URLSearchParams();

  if (code) query.append("code", code);
  if (category_id) query.append("category_id", category_id);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products?${query.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        "Accept-Language": apiLocale,
        Accept: "application/json",
      },
      cache: "no-store",
    },
  );

  if (!res.ok) {
    console.log("API ERROR:", res.status);
    return [];
  }

  const data = await res.json();
    console.log("First product structure:", data.data);

  // Логируем структуру данных для отладки
  if (data.data && data.data.length > 0) {
    console.log("First product structure:", Object.keys(data.data[0]));
  }

  return data.data || [];
}

// Обновляем тип параметров для компонента
type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: {
    code?: string;
    category_id?: string;
  };
};

export default async function CatalogPage({ params, searchParams }: PageProps) {
  // Деструктурируем параметры с await
  const { locale } = await params;

  const t = await getTranslations("");

  const [products, categories] = await Promise.all([
    getProducts(locale, searchParams?.code, searchParams?.category_id),
    getCategories(locale),
  ]);

  const bannerContent = {
    title: t("TurnstileBanner.title"),
    description: t("TurnstileBanner.content"),
    btn: t("TurnstileBanner.see_more_btn"),
  };

  return (
    <div className="turnstile_page mt-8">
      <CatalogItemNew products={products} categories={categories} />
      <Banner bg={catalogBanner.src} content={bannerContent} page="catalog" />
    </div>
  );
}
