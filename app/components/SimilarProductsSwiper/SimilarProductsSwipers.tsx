"use client";

import Image from "next/image";
import React, { useEffect, useState, useTransition } from "react"; // ????????? ? useTransition
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation"; // ????????? ?

import "swiper/css";
import "swiper/css/navigation";

const productCodeToTitleIndex: Record<string, number> = {
  "PZ-sanitaric-64": 0,
  "PZ-hygiene-66": 1,
  "PZ-26": 2,
  "TM-22": 3,
  "TV-1": 4,
  "PZ-3": 5,
  "TM-11": 6,
  "PZ-21": 7,
  "PZ-20": 8,
  "PZ-4": 9,
  "PZ-6": 10,
};

const FEATURED_PRODUCT_CODES = [
  "PZ-3",
  "PZ-4",
  "PZ-21",
  "PZ-6",
  "PZ-20",
  "TV-1",
  "PZ-26",
  "TM-11",
  "TM-22",
  "PZ-sanitaric-64",
  "PZ-hygiene-66",
];

type Product = {
  id: number;
  slug: string;
  category_slug: string;
  code: string;
  img: string[] | string | null;
};

export default function SimilarProductsSwipers() {
  const t = useTranslations();
  const router = useRouter(); // ??????? ?????????????
  const [isPending, startTransition] = useTransition(); // ??????? ??????

  const [lang, setLang] = useState("am");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const getImgSrc = (img: string[] | string | null): string => {
    if (!img) return "/placeholder.png";

    if (typeof img === "string") {
      return img;
    }

    if (Array.isArray(img) && img.length > 0) {
      return img[0];
    }

    return "/placeholder.png";
  };

  useEffect(() => {
    const cookieLang =
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("lang="))
        ?.split("=")[1] || "am";

    setLang(cookieLang);
  }, []);

  useEffect(() => {
    const localeMap: Record<string, string> = {
      am: "hy",
      ru: "ru",
      en: "en",
    };

    const cookieLang =
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("lang="))
        ?.split("=")[1] || "am";

    const apiLocale = localeMap[cookieLang] ?? "hy";

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/products?locale=${apiLocale}`);

        if (!res.ok) {
          console.error("Bad response:", res.status);
          return;
        }

        const data = await res.json();

        const filtered = (data.data as Product[]).filter((product) =>
          FEATURED_PRODUCT_CODES.includes(product.code),
        );

        filtered.sort(
          (a, b) =>
            FEATURED_PRODUCT_CODES.indexOf(a.code) -
            FEATURED_PRODUCT_CODES.indexOf(b.code),
        );

        setProducts(filtered);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ??????? ??? ???????? ?????????
  const handleProductClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault(); // ????????? ??? ????????? ????? ???????
    startTransition(() => {
      router.push(url);
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[250px]">
        {/* API-?? ????????? ??????? loader */}
        <div className="w-8 h-8 border-4 border-t-[#5939F5] border-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* ??????? Loader-? ?????? ????? ?????? ??????? */}
      {isPending && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="w-12 h-12 border-4 border-t-[#5939F5] border-gray-200 rounded-full animate-spin"></div>
        </div>
      )}

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1280: { slidesPerView: 4, spaceBetween: 30 },
        }}
        className="w-full"
      >
        {products.map((product) => {
          const titleIndex = productCodeToTitleIndex[product.code];

          const title =
            titleIndex !== undefined
              ? t(`titleInfoProducts.${titleIndex}.itemTitle`)
              : product.code;

          const productUrl = `/${lang}/catalog/${product.category_slug}/${product.slug}/${product.code}`;

          return (
            <SwiperSlide key={product.id}>
              <a
                href={productUrl}
                onClick={(e) => handleProductClick(e, productUrl)}
                title={title}
                className="flex flex-col items-center cursor-pointer"
              >
                <Image
                  src={product.image} 
                  alt={title}
                  width={300}
                  height={250}
                  className="w-full h-[250px] object-cover rounded"
                />

                <p className="mt-3 text-center font-semibold text-lg font_color">
                  {product.code}
                </p>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}