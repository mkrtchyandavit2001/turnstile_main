import Image from 'next/image'
import React from 'react'
import choseImg from '@/public/images/chooseImg.png'
import { LightIcon } from '@/app/icons/LightIcon'
import { ComputerSettingsIcon } from '@/app/icons/ComputerSettingsIcon'
import { LockIcon } from '@/app/icons/LockIcon'
import { HandeShakeIcon } from '@/app/icons/HandShakeIcon'
import { useTranslations } from 'next-intl'
const WhyChooseUsSection = () => {
  const t = useTranslations("WhyChooseUsSection")
  return (
    <div className='py-[100px] px-[20px] bg-[#0E0449] mt-[100px]'>
        <div className="container flex justify-center items-center gap-[50px] max-md:flex-col">
            <div className='w-[50%] flex justify-center items-center max-md:w-[80%]'>
                <Image src={choseImg} alt='Why Chose Us'/>
            </div>
            <div className='flex flex-col gap-[50px] max-md:w-[90%]'>
                <h2 className='text-[40px] leading-[48px] font-semibold text-white arm_Hmks_Bebas_Neue'>{t("title")}</h2>
                <ul className='flex flex-col gap-[30px] max-w-[400px]'>
                  <li className='flex items-center gap-[20px]'>
                    <span><LightIcon width={38} height={48} color="#5939F5"/></span>
                    <p className='freeSans font-semibold text-[16px] text-white '>{t("list.0")}</p>
                  </li>

                  <li className='flex items-center gap-[20px]'>
                    <span><ComputerSettingsIcon width={40} height={38} color="#5939F5"/></span>
                    <p className='freeSans font-semibold text-[16px] text-white '>{t("list.1")}</p>
                  </li>

                  <li className='flex items-center gap-[20px]'>
                    <span><LockIcon width={38} height={38} color="#5939F5"/></span>
                    <p className='freeSans font-semibold text-[16px] text-white '>{t("list.2")}</p>
                  </li>

                  <li className='flex items-center gap-[20px]'>
                    <span><HandeShakeIcon width={38} height={38} color="#5939F5"/></span>
                    <p className='freeSans font-semibold text-[16px] text-white '>{t("list.3")}</p>
                  </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUsSection