"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { our_clients_data } from '@/utils/reviewsFromOurClients';
import { useTranslations } from 'next-intl';
import "swiper/css";
import "swiper/css/navigation";
import Image from 'next/image';
import { Star } from 'lucide-react';

const productCodeToTitleIndex:Record<string,number> = {
    "1":0,
    "2":1,
    "3":2,
    "4":3,
    "5":4,
    "6":5
}


const SwiperComments = () => {
    const t = useTranslations('')
    const productID = [0,1,2,3,4,5]
    const rating5 = [{id:"1",symbolStar:<Star fill='#5939F5'/>},{id:"2",symbolStar:<Star fill='#5939F5'/>},
    {id:"3",symbolStar:<Star fill='#5939F5'/>},{id:"4",symbolStar:<Star fill='#5939F5'/>},
    {id:"5",symbolStar:<Star fill='#5939F5'/>}]
    const rating4 = [{id:"1",symbolStar:<Star fill='#5939F5'/>},{id:"2",symbolStar:<Star fill='#5939F5'/>},
    {id:"3",symbolStar:<Star fill='#5939F5'/>},{id:"4",symbolStar:<Star fill='#5939F5'/>},
    {id:"5",symbolStar:<Star fill='#FAFAFA'/>}]
  return (
    <Swiper
    className='mySwiper w-full'
    slidesPerView={3}
    spaceBetween={20}
    modules={[Pagination]}
    pagination={{clickable:true}}
    style={{padding:"0px 0px 60px 0px"}}
    breakpoints={{
         320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView:1,
                spaceBetween: 10,
              },
         640: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
         1024: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
        1280: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
    }}>
        {
            our_clients_data.map((el) => {
                const clientIndex = productCodeToTitleIndex[el.id]
                const comment = productID.includes(clientIndex) && clientIndex !== undefined ?
                t(`CustomerDataComments.${clientIndex}.comment`) : ""
            
                return (
                    <SwiperSlide key={el.id}>
                        <div className='flex flex-col w-[100%] 
                        border-solid border-[2px] border-[#5939F5] p-6 rounded-[4px] gap-[32px]'>
                            
                               <div className='flex gap-[12px]'>
                                 {
                                    el.rating === 4 && rating4.map((el) => {
                                        return (
                                           <span key={el.id}>
                                             {el.symbolStar}
                                           </span>
                                        )
                                    }) ||
                                    el.rating === 5 && rating5.map((el) => {
                                        return (
                                           <span key={el.id}>
                                             {el.symbolStar}
                                           </span>
                                        )
                                    }) 
                                }
                               </div>
                            
                            <div className='h-[180px] overflow-auto' style={{paddingRight:"8px"}}>
                                <p className='font-normal text-[16px] freeSans leading-[24px]'>
                                {comment}</p>
                            </div>   
                            <div className='flex flex-col items-center gap-[24px] lg:flex-row md:sm:flex-row sm:flex-col'>
                                <div>
                                    <Image className='w-[80px] h-[80px] object-cover
                                    object-top rounded-[100px] lg:w-[62px] lg:h-[62px]
                                    md:w-[62px] md:h-[62px] sm:w-[80px] sm:h-[80px]' src={el.img[0]} 
                                    alt={t(`CustomerDataComments.${clientIndex}.name`)}/>
                                </div>
                                <div className='flex flex-col items-center lg:flex-col lg:items-start md:flex-col md:items-start sm:flex-col sm:items-center'>
                                    <h2 className='text-[16px] font-[600] 
                                    freeSans leading-[24px]'>
                                    {t(`CustomerDataComments.${clientIndex}.name`)}
                                    </h2>
                                    <p className='text-[#6B6D69] text-[16px]
                                    font-normal freeSans leading-[24px] text-center'>
                                    {t(`CustomerDataComments.${clientIndex}.jobTitle`)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })
        }
    </Swiper>
  )
}

export default SwiperComments
