"use client";
import React from "react";
import Image from "next/image";
import { our_partners_data } from "@/utils/partner";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";

const productCodeToTitleIndex: Record<string, number> = {
  "1": 0,
  "2": 1,
  "3": 2,
  "4": 3,
  "5": 4,
  "6": 5,
  "7": 6,
  "8": 7,
  "9": 8,
  "10": 9,
  "11": 10,
  "12": 11,
  "13": 12,
  "14": 13,
  "15": 14,
  "16": 15,
  "17": 16,
  "18": 17,
  "19": 18,
  "20": 19,
  "21": 20,
  "22": 21,
  "23": 22,
  "24": 23,
  "25": 24,
  "26": 25,
  "27": 26,
  "28": 27,
  "29": 28,
};

const paintingSizes: Record<string, number> = {
  "1": 80,
  "2": 100,
  "3": 100,
  "4": 100,
  "5": 90,
  "6": 100,
  "7": 80,
  "8": 100,
  "9": 80,
  "10": 110,
  "11": 80,
  "12": 70,
  "13": 50,
  "14": 110,
  "15": 100,
  "16": 80,
  "17": 60,
  "18": 80,
  "19": 110,
  "20": 120,
  "21": 100,
  "22": 100,
  "23": 60,
  "24": 180,
  "25": 100,
  "26": 100,
  "27": 70,
  "28": 70,
  "29": 130,
};

const SwiperPartners = () => {
  const t = useTranslations("NameOfPartners");
  const productID = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
  return (
    <div className="w-full px-4 p-4">
      <Swiper
        className="mySwiper h-[200px]"
        slidesPerView={7}
        spaceBetween={20}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 7,
            spaceBetween: 30,
          },
        }}
      >
        {our_partners_data.map((product) => {
          const sizes = paintingSizes[product.id];
          const titleIndex = productCodeToTitleIndex[product.id];
          const title =
            productID.includes(titleIndex) && titleIndex !== undefined
              ? t(`${titleIndex}.itemTitle`)
              : "";

          return (
            <SwiperSlide
              key={product.id}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {product.url ? (
                <Link href={product.url}>
                  <Image
                    src={product.img[0]}
                    title={title}
                    alt={title}
                    className="object-cover h-auto"
                    width={sizes}
                  />
                </Link>
              ) : (
                <Image
                  src={product.img[0]}
                  title={title}
                  alt={title}
                  className="object-cover h-auto"
                  width={sizes}
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperPartners;
