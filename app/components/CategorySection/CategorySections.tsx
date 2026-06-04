"use client";
import { LineIcon } from "@/app/icons/LineIcon";
import React, { useEffect, useState, useTransition } from "react"; // ????????? ? useTransition
import our_products_bacground from "@/public/images/our_products_section_bacground.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ButtonParrentComponent from "../ButtonParrentComponent/ButtonParrentComponent";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRouter } from "next/navigation"; // ????????? ?

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

const getImgSrc = (img: string[] | string | null): string => {
  if (!img) return "/placeholder.png";
  if (typeof img === "string") return img;
  if (Array.isArray(img) && img.length > 0) return img[0];
  return "/placeholder.png";
};

const CategorySections = () => {
  const t = useTranslations("");
  const router = useRouter();
  const [isPending, startTransition] = useTransition(); // ?????????? ??????

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
          "/api/products",
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
              "Accept-Language": apiLocale,
              Accept: "application/json",
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
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ?????????? ????????? ????????? ????????
  const handleNavigation = (url: string) => {
    startTransition(() => {
      router.push(url);
    });
  };

  return (
    <div
      style={{ backgroundImage: `url(${our_products_bacground.src})` }}
      className="relative bg-cover bg-no-repeat py-[50px] md:p-[50px]"
    >
      {/* ??????? Loader-? ?????? ????? ?????? ??????? */}
      {isPending && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="w-12 h-12 border-4 border-t-[#5939F5] border-gray-200 rounded-full animate-spin"></div>
        </div>
      )}

      <div className="container flex flex-col gap-[50px] justify-center items-center">
        <div className="flex items-center justify-center gap-3">
          <LineIcon width={27} height={2} color="#5939F5" />
          <h2 className="text-[24px] font_color font-normal arm_Hmks_Bebas_Neue leading-[28.8px]">
            {t(`OurProductsSection.title`)}
          </h2>
          <LineIcon width={27} height={2} color="#5939F5" />
        </div>

        <div className="w-full px-4">
          {loading ? (
            <div className="flex justify-center items-center h-[250px]">
              {/* ????????? API ??????? ?????? */}
              <div className="w-10 h-10 border-4 border-t-[#5939F5] border-gray-200 rounded-full animate-spin"></div>
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

                const productUrl = `/${lang}/catalog/${product.category_slug}/${product.slug}/${product.code}`;

                return (
                  <SwiperSlide key={product.id}>
                    <a
                      href={productUrl}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(productUrl);
                      }}
                      className="flex flex-col items-center cursor-pointer"
                      title={title}
                    >
                      <Image
                        src={product.image} // ??????? ? product.image -> getImgSrc(product.img)
                        alt={title}
                        width={300}
                        height={250}
                        className="object-cover h-[250px] w-full rounded"
                      />
                     
                      <p className="text-lg mt-2 font-semibold font_color">
                        {product.code}
                      </p>
                    </a>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </div>

        {/* «?????? ??????» ?????? ??????? ??????? */}
        <div 
          onClick={() => handleNavigation(`/${lang}/catalog`)} 
          className="cursor-pointer"
        >
          <ButtonParrentComponent
            btnText={t("CategorySections.see_more_btn")}
          />
        </div>
      </div>
    </div>
  );
};

export default CategorySections;