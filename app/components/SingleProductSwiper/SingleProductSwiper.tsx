"use client"
import { our_products_data } from '@/utils/catalog'
import { useParams } from 'next/navigation'
import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay, Navigation } from "swiper/modules";
import Image from 'next/image'
import { useTranslations } from 'next-intl'

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

const SingleProductSwiper = () => {
  const params = useParams()
  const id = params?.id as string | undefined
  const t = useTranslations('')
  const productCodes = [
    'PZ-3', 'PZ-4', 'PZ-21', 'PZ-6', 'PZ-20', 'TV-1',
    'PZ-26', 'TM-11', 'TM-22', 'PZ-sanitaric-64', 'PZ-hygiene-66'
  ]
  const product = id
  ? our_products_data.find((item) => item.code === id)
  : undefined;
  const titleModelInfo = product?.code as string
  const titleIndex = productCodeToTitleIndex[titleModelInfo]
  const title = productCodes.includes(titleModelInfo) && titleIndex !== undefined ?
  t(`titleInfoProducts.${titleIndex}.itemTitle`) : ""
 
  
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      navigation
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="productImageSlider h-full max-md:h-[300px]"
      modules={[Autoplay, Navigation]}
    >
      {product?.img.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image}
            title={title}
            alt={`${product.code}-${index}`}
            className="w-full h-[500px] rounded object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SingleProductSwiper
