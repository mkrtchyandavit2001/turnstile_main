'use client'; // Mark this as a client component

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; 
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import home_banner_img1 from '@/public/images/home_banner_img1.png'
import home_banner_img2 from '@/public/images/home_banner_img2.png'
import home_banner_img3 from '@/public/images/home_banner_img3.png'
import { useTranslations } from 'next-intl';

interface IBannerItem {
    id: string;
    image: string;
    title: string;
    description: string;
}


const HomePageBanner: React.FC  = () => {
    const t = useTranslations("HomePageCarousel")

    const bannerSliderData: IBannerItem[] = [
        {
          id: '1',
          image: home_banner_img1.src,
          title: t("titles.0"),
          description: t("paragraphs.0"),
        },
        {
          id: '2',
          image: home_banner_img2.src,
          title: t("titles.1"),
          description: t("paragraphs.1"),
        },
        {
          id: '3',
          image: home_banner_img3.src,
          title: t("titles.2"),
          description: t("paragraphs.2"),
        },
      ];
    return (
        <div className="home_page_banner h-[540px] bg-white !rounded-none">
            <Swiper
                modules={[Pagination, Navigation, Autoplay]} 
                pagination={{ clickable: true }}
                navigation
                loop
                autoplay={{
                    delay: 3000, 
                    disableOnInteraction: false, 
                }}
                className="h-[430px] w-full rounded-none"
            >
                {bannerSliderData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div style={{ backgroundImage: `url(${item.image})` }} className="rounded-none relative h-full w-full bg-cover bg-no-repeat bg-center ">
                            <div className="rounded-none container h-full flex items-center">
                                <div className="rounded-none max-w-[530px] flex flex-col gap-[30px]  px-[50px] max-sm:px-2 items-start">
                                    <h1 className="text-white text-[40px] max-md:text-[30px] leading-[48px] font-normal Arm_Hmks_Bebas_Neue">
                                        {item.title}
                                    </h1>
                                    <p className="text-[16px] text-white font-normal leading-[23.04px] freeSans">
                                        {item.description}
                                    </p>

                                    <ButtonComponent
                                        name={t("buttonText")}
                                        path="/calendar"
                                        bg="#5939F5"
                                        color="#FFFFFF"
                                        size="16px"
                                        px="15px"
                                        py="7px"
                                        redirect="https://calendly.com/webexprojects/30min?back=1&month=2024-12"
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HomePageBanner;
