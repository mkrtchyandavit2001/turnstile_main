import React from 'react'
import googlePlayImg from '@/public/images/googleplay.png'
import appStoreImg from '@/public/images/appstore.png'
import mobileAppImg from '@/public/images/mobileImg.png'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const MobileAppSection = () => {
    const t = useTranslations("MobileAppSection")
  return (
    <div className='mobile_app_section px-[50px] max-md:mt-[50px]'>
        <div className="container flex justify-center items-center max-md:flex-col">
            <div className='w-[50%] flex flex-col gap-[30px] justify-center max-md:w-full max-md:items-center'>
                <h2 className='arm_Hmks_Bebas_Neue font-semibold text-[30px] leading-[37.6px] font_color uppercase max-md:text-center'>{t("title")}</h2>
                <div className='flex gap-[20px] items-center'>
                    <Image src={appStoreImg} alt='app store' className='w-[204px] h-[59px] max-md:w-[100px] max-md:h-[35px]'/>
                    <Image src={googlePlayImg} alt='google play' className='w-[204px] h-[59px] max-md:w-[100px] max-md:h-[35px]'/>
                </div>
            </div>

            <div className='w-[50%] max-md:w-full'>
                <Image src={mobileAppImg} alt='mobile app'/>
            </div>
        </div>
    </div>
  )
}

export default MobileAppSection