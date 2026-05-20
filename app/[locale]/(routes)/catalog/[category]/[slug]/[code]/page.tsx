// app/[locale]/(routes)/catalog-new/[category]/[slug]/[code]/page.tsx
import React from "react";
import NewSingleProductSwiper from "@/app/components/SingleProductSwiper/NewSingleProductSwiper";
import ButtonComponent from "@/app/components/ButtonComponent/ButtonComponent";
import SimilarProductsSwiper from "@/app/components/SimilarProductsSwiper/SimilarProductsSwiper";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import ProductTabs from "@/app/components/ProductTabs/ProductTabs";
import ClientSlugUpdater from '@/app/components/Slug/ClientSlugUpdater';
import { FaPhone, FaCheckCircle } from 'react-icons/fa';
import SimilarProductsSwipers from "@/app/components/SimilarProductsSwiper/SimilarProductsSwipers";

interface MediaItem {
    url: string;
    title?: string;
    alt?: string;
    type: string;
}

interface ProductAPIResponse {
    id: number;
    slug: string;
    name: string;
    description: string;
    short_description: string;
    specifications?: string;
    code: string;
    category_slug: string;
    category_name: string;
    main_image: MediaItem | null;
    slider_images: MediaItem[];
    additional_files: MediaItem[];
    videos: MediaItem[];
    documents: MediaItem[];
}

const localeMap: Record<string, string> = {
    am: "hy",
    ru: "ru",
    en: "en",
};

/* =======================
   SEO METADATA
======================= */
export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string; code: string; }>;
}): Promise<Metadata> {
    const { locale, code } = await params;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const apiLocale = localeMap[locale] ?? "en";

    const res = await fetch(`${apiUrl}/api/products/param/${code}`, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            "Accept-Language": apiLocale,
            Accept: "application/json",
        },
        // cache: "no-store",
    });

    if (!res.ok) {
        return {
            title: "Product not found",
            description: "Product not found",
        };
    }

    const { data: product }: { data: ProductAPIResponse } = await res.json();

    const mainImageUrl = product.main_image?.url || "";
    return {
        title: product.name,
        description: product?.short_description?.replace(/<[^>]*>/g, '').slice(0, 160),
        openGraph: {
            title: product.name,
            description: product?.short_description?.replace(/<[^>]*>/g, '').slice(0, 160),
            url: `${apiUrl}/${locale}/catalog/${product.category_slug}/${product.slug}/${product.code}`,
            siteName: "turniket.am",
            type: "website",
            images: mainImageUrl
                ? [
                    {
                        url: mainImageUrl,
                        width: 700,
                        height: 650,
                        alt: product.name,
                    },
                ]
                : [],
        },
        twitter: {
            card: "summary_large_image",
            title: product.name,
            description: product?.short_description?.replace(/<[^>]*>/g, '').slice(0, 160),
            images: mainImageUrl ? [mainImageUrl] : [],
        },
    };
}

/* =======================
   PAGE
======================= */
// Обновляем тип параметров для Next.js 15
type PageProps = {
    params: Promise<{
        locale: string;
        category: string;
        slug: string;
        code: string;
    }>;
};

const SingleProductPage = async ({ params }: PageProps) => {
    // Деструктурируем параметры с await
    const { locale, code, category, slug } = await params;
    const apiLocale = localeMap[locale] ?? "en";

    const t = await getTranslations({
        locale,
        namespace: "OurProductsSection",
    });

    const tTitles = await getTranslations({
        locale,
        namespace: "singleProductPageTitles",
    });

    const tProduct = await getTranslations({
        locale,
        namespace: "ProductPage",
    });

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const res = await fetch(`${apiUrl}/api/products/param/${code}`, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            "Accept-Language": apiLocale,
            Accept: "application/json",
        },
        // cache: "no-store",
    });

    if (!res.ok) {
        return (
            <div className="container py-10 text-center text-red-500">
                Product not found
            </div>
        );
    }

    const { data: product }: { data: ProductAPIResponse } = await res.json();

    // Подготовка данных для слайдера и табов
    const allMediaItems: MediaItem[] = [
        ...(product.main_image ? [product.main_image] : []),
        ...product.slider_images,
    ];

    // Для слайдера используем все изображения
    const sliderImages = allMediaItems.filter(item => item.type === 'image');
    const videoItems = product.videos;
    const documentItems = product.documents;
    const additionalFileItems = product.additional_files;

    const productUrl = `/catalog/${product.category_slug}/${product.slug}/${product.code}`;
    const currentPath = `/${locale}/catalog/${category}/${slug}/${code}`;

    // Телефоны для разных языков
    const phoneNumbers = {
        ru: ['+374 96-10-10-17', '+374 96-40-00-73'],
        en: ['+374 96-10-10-17', '+374 96-40-00-73'],
        hy: ['+374 96-10-10-17', '+374 96-40-00-73']
    };

    // Форматирование номера телефона для ссылки
    const formatPhoneForLink = (phone: string): string => {
        return phone.replace(/[^0-9+]/g, '');
    };

    // Извлечение преимуществ из описания
    const extractAdvantages = (html: string): string[] => {
        const text = html.replace(/<[^>]*>/g, '');
        const lines = text.split('\n')
            .filter(line => line.trim().length > 0 && line.trim().length < 200);

        // Если мало строк, создаем преимущества из первых предложений
        if (lines.length < 2) {
            const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 10);
            return sentences.slice(0, 4);
        }

        return lines.slice(0, 4);
    };

    const advantages = extractAdvantages(product.description);
    console.log(advantages)
    // Подготовка данных для табов
    const tabsData = {
        description: product.description,
        specifications: product.specifications,
        gallery: sliderImages,
        videos: videoItems,
        documents: [...documentItems, ...additionalFileItems],
        delivery: null,
    };

    return (
        <div className="one_product_page container py-6 px-4 flex flex-col gap-10">
            {/* ===== MAIN IMAGE + INFO ===== */}
            <div className="flex max-md:flex-col justify-between gap-10 items-stretch max-md:min-h-0">

                {/* LEFT: IMAGE SECTION WITH SLIDER */}
                <div className="w-[48%] max-md:w-full flex flex-col">
                    {/* Слайдер под главной картинкой */}
                    {sliderImages.length > 0 ? (
                        <div className="flex-1">
                            <NewSingleProductSwiper
                                images={sliderImages.map(img => ({
                                    src: img.url,
                                    alt: img.alt || `${product.name} - ${tProduct('image')}`,
                                    title: img.title || product.name
                                }))}
                                productName={product.name}
                            />
                        </div>
                    ) : (
                        <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-lg">
                            <p className="text-gray-500 text-sm text-center">
                                {tProduct('noSliderImages')}
                            </p>
                        </div>
                    )}
                </div>

                {/* RIGHT: PRODUCT INFO */}
                <div className="w-[48%] max-md:w-full">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-full flex flex-col">
                        {/* Заголовок */}                        
                        <h1 className="text-2xl lg:text-3xl custom:text-2xl font-bold text-gray-900 uppercase mb-4">
                            {product.code} {product.name}
                        </h1>

                        {/* Основные преимущества */}
                        <div className="flex-grow">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <FaCheckCircle className="text-green-500" />
                                {tProduct('mainAdvantages')}
                            </h3>

                            {/* {advantages.length > 0 ? (
                                <ul className="space-y-2">
                                    {advantages.map((advantage, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="text-gray-700 text-sm">{advantage}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <div
                                        className="text-gray-700 text-sm"
                                        dangerouslySetInnerHTML={{ __html: product.description }}
                                    />
                                </div>
                            )} */}


                            
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <div
                                        className="text-gray-700 text-sm"
                                        dangerouslySetInnerHTML={{ __html: product?.short_description }}
                                    />
                                </div>
                            
                        </div>

                        {/* Категория и Код товара */}
                        <div className="mb-4 pt-4 border-t border-gray-100">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-gray-50 p-2 rounded">
                                    <span className="text-gray-500 block mb-1 text-xs">
                                        {tProduct('category')}
                                    </span>
                                    <span className="font-medium text-gray-800 text-sm">
                                        {product.category_name}
                                    </span>
                                </div>

                                <div className="bg-gray-50 p-2 rounded">
                                    <span className="text-gray-500 block mb-1 text-xs">
                                        {tProduct('productCode')}
                                    </span>
                                    <span className="font-medium text-gray-800 text-sm">
                                        {product.code}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Компактный блок контактов */}                     
                        <div className="mb-4">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                <div className="flex items-center gap-2 mb-3">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-800">
                                            {tProduct('contactForPurchase')}
                                        </h4>
                                    </div>
                                </div>

                                {/* Контейнер для телефонов и почты */}
                                <div className="flex flex-col xl:flex-row gap-2 w-full">
                                    {/* Телефоны */}
                                    {phoneNumbers[apiLocale as keyof typeof phoneNumbers]?.map((phone, index) => (
                                        <a
                                            key={index}
                                            href={`tel:${formatPhoneForLink(phone)}`}
                                            className="flex items-center gap-2 p-2 bg-white rounded hover:bg-blue-50 transition-colors group w-full sm:w-auto"
                                        >
                                            <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                                                <FaPhone className="text-green-600 text-xs" />
                                            </div>
                                            <span className="text-sm font-medium text-gray-800">{phone}</span>
                                        </a>
                                    ))}

                                    {/* Email */}
                                    <a
                                        href="mailto:info@webex.am"
                                        className="flex items-center gap-2 p-2 bg-white rounded hover:bg-blue-50 transition-colors group w-full sm:w-auto"
                                    >
                                        <div className="w-6 h-6 flex items-center justify-center bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
                                            <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium text-gray-800">info@webex.am</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Кнопка заказа */}
                        <div className="pt-4 border-t border-gray-100">
                            <ButtonComponent
                                name={t("order_btn")}
                                bg="#5939F5"
                                color="#fff"
                                size="14px"
                                border="none"
                                width="100%"
                                py="10px"
                                px="0"
                                order={product.code}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ТАБЫ */}
            <div className="">
                <ProductTabs
                    data={tabsData}
                    // productName={product.name}
                />
            </div>

            {/* ПОХОЖИЕ ТОВАРЫ */}
            <div className="mt-10 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                    {tTitles("1")}
                </h2>
                <SimilarProductsSwipers/>

            </div>

            <ClientSlugUpdater
                currentPath={currentPath}
                correctPath={`/${locale}${productUrl}`}
            />
        </div>
    );
};

export default SingleProductPage;