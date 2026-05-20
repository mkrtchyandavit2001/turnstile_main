"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useTranslations } from "next-intl";
import "swiper/css";
import "swiper/css/navigation";
import { ENV } from "@/src/lib/env";

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

type Product = {
  id: number;
  slug: string;
  category_slug: string;
  code: string;
  img: string[] | string | null;
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

// img կարող է լինել string, string[], կամ null — բոլոր դեպքերը handle ենք անում
const getImgSrc = (img: string[] | string | null): string => {
  if (!img) return "";
  if (typeof img === "string") return img;
  if (Array.isArray(img) && img.length > 0) return img[0];
  return "";
};

const SimilarProductsSwipers = () => {
  const t = useTranslations("");
  const [lang, setLang] = useState("am");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
          {
            headers: {
               Authorization: `Bearer ${ENV.API_KEY}`,
            },
            cache: "no-store",
          }
        );

        const data = await res.json();
        
        const filtered = (data.data as Product[]).filter((p) =>
          FEATURED_PRODUCT_CODES.includes(p.code)
        );

        filtered.sort(
          (a, b) =>
            FEATURED_PRODUCT_CODES.indexOf(a.code) -
            FEATURED_PRODUCT_CODES.indexOf(b.code)
        );

        setProducts(filtered);
      }  catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="bg-cover bg-no-repeat py-[50px] md:p-[50px]"
    >
      <div className="container flex flex-col gap-[50px] justify-center items-center">
        

        <div className="w-full px-4">
          {loading ? (
            <div className="flex justify-center items-center h-[250px]">
              <p className="text-gray-500">Loading...</p>
            </div>
          ) : (
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
                          src={product.image}
                          alt={title}
                          width={300}
                          height={250}
                          className="object-cover h-[250px] w-full"
                        />
                   
                      <p className="text-lg mt-2 font-semibold">
                        {product.code}
                      </p>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </div>

        
      </div>
    </div>
  );
};

export default SimilarProductsSwipers;
