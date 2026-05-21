"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useTranslations } from "next-intl";
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

// const getImgSrc = (img: string[] | string | null): string => {
//   if (!img) return "";
//   if (typeof img === "string") return img;
//   if (Array.isArray(img) && img.length > 0) return img[0];
//   return "";
// };

const SimilarProductsSwipers = () => {
  const t = useTranslations();
  const [lang, setLang] = useState("am");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const getImgSrc = (img: string[] | string | null): string => {
    if (!img) return "";
    if (typeof img === "string") return img;
    if (Array.isArray(img) && img.length > 0) return img[0];
    return "";
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
        // const res = await fetch(
        //   `https://turnstile-admin.turniket.am/api/products`,
        //   {
        //     method: "GET",
        //     headers: {
        //       Accept: "application/json",
        //       "Content-Type": "application/json",

        //       // եթե API-ն պահանջում է auth
        //       Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,

        //       // լեզու
        //       "Accept-Language": apiLocale,
        //     },
        //     cache: "no-store",
        //   },
        // );
        const res = await fetch(`/`);
        const data = await res.json();

        const contentType = res.headers.get("content-type");
        if (!res.ok || !contentType?.includes("application/json")) {
          const text = await res.text();
          console.error("Bad response:", res.status, text.slice(0, 200));
          return;
        }
        // DEBUG — տեսնելու img field-ի կառուցվածքը
        console.log("FIRST PRODUCT IMG:", data.data?.[0]?.img);

        const filtered = (data.data as Product[]).filter((p) =>
          FEATURED_PRODUCT_CODES.includes(p.code),
        );

        filtered.sort(
          (a, b) =>
            FEATURED_PRODUCT_CODES.indexOf(a.code) -
            FEATURED_PRODUCT_CODES.indexOf(b.code),
        );

        setProducts(filtered);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    console.log(products);

    fetchData();
  }, []);
  console.log("API KEY:", process.env.NEXT_PUBLIC_API_KEY);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[250px]">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation, Autoplay]}
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
        1280: { slidesPerView: 4, spaceBetween: 30 },
      }}
      className="mySwiper"
    >
      {products.map((product) => {
        const titleIndex = productCodeToTitleIndex[product.code];
        const title =
          titleIndex !== undefined
            ? t(`titleInfoProducts.${titleIndex}.itemTitle`)
            : product.code;

        return (
          <SwiperSlide key={product.id}>
            <Link
              href={`/${lang}/catalog/${product.category_slug}/${product.slug}/${product.code}`}
              className="flex flex-col items-center"
              title={title}
            >
              <Image
                src={getImgSrc(product.img)}
                alt={title}
                width={300}
                height={250}
                className="object-cover h-[250px] w-full"
              />

              <p className="text-lg mt-2 font-semibold">{product.code}</p>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SimilarProductsSwipers;
