'use client'
import { LineIcon } from '@/app/icons/LineIcon';
import React, { useEffect, useState, useTransition } from 'react';
import our_products_bacground from '@/public/images/our_products_section_bacground.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import ButtonParrentComponent from '../ButtonParrentComponent/ButtonParrentComponent';
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { our_products_data } from '@/utils/catalog';
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';

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

const OurProductsSection = () => {
  const t = useTranslations('');
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [lang, setLang] = useState('am');
  const productCodes = ['PZ-3', 'PZ-4', 'PZ-21', 'PZ-6', 'PZ-20', "TV-1", 'PZ-26','TM-11','TM-22', 'PZ-sanitaric-64', 'PZ-hygiene-66']

  useEffect(() => {
    const cookieLang = document.cookie
      .split('; ')
      .find(row => row.startsWith('lang='))
      ?.split('=')[1] || 'am';
    setLang(cookieLang);
  }, []);

  // ????????, ??? ???????? ? ??????? ? ???????? loader-?
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
      {/* ??????? Loader-? ?????? */}
      {isPending && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="w-12 h-12 border-4 border-t-[#5939F5] border-gray-200 rounded-full animate-spin"></div>
        </div>
      )}

      <div className="container flex flex-col gap-[50px] justify-center items-center">
        <div className="flex items-center justify-center gap-3">
          <LineIcon width={27} height={2} color="#5939F5"/>
          <h2 className="text-[24px] font_color font-normal arm_Hmks_Bebas_Neue leading-[28.8px]">
            {t(`OurProductsSection.title`)}
          </h2>
          <LineIcon width={27} height={2} color="#5939F5"/>
        </div>

        <div className='w-full px-4'>
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
            {our_products_data.map(product => {
              const titleIndex = productCodeToTitleIndex[product.code];
              const title = productCodes.includes(product.code) && titleIndex !== undefined
                ? t(`titleInfoProducts.${titleIndex}.itemTitle`) : "";
              
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
                      src={product.img[0]}
                      alt={product.id}
                      className="object-cover h-[250px]"
                    />
                    <p className="text-lg mt-2 font-semibold">{product.code}</p>
                  </a>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>

        {/* «?????? ??????» ?????? ???????? ?????? loader-? ?????????? onClick-? ??????? */}
        <div onClick={() => handleNavigation(`/${lang}/catalog`)} className="w-full flex justify-center">
          <ButtonParrentComponent btnText={t('OurProductsSection.see_more_btn')} />
        </div>
      </div>
    </div>
  );
};

export default OurProductsSection;