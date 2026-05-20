import Image from 'next/image'
import React from 'react'
import qrScanImg from '@/public/images/qr_scan_section_img.png' 
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import { useTranslations } from 'next-intl'
export const QrScanSection = () => {
    const t = useTranslations('QrScanSection');
  return (
    <div className='qr_scan_section py-[50px] md:p-[50px]'>
        <div className="container flex justify-center max-md:flex-col md:gap-[50px] items-center">
            <div className='w-[50%] max-md:w-[90%]'>
                <Image src={qrScanImg} alt='Qr Scanner'/>
            </div>

            <div className='flex flex-col gap-[20px] items-start w-[40%] max-md:w-[90%]'>
                <h2 className='Arm_Hmks_Bebas_Neue font-semibold text-[24px] leading-[28.8px] font_color'>{t('title')}</h2>
                <p className='freeSans font-normal text-[16px] leading-[32px]  font_color'>{t('description')}</p>

                <ul className='list-disc list-inside flex flex-col gap-[10px]'>
                    <li className='freeSans font-normal text-[16px] leading-[32px] font_color'>{t('advantages.0')}</li>
                    <li className='freeSans font-normal text-[16px] leading-[32px] font_color'>{t('advantages.1')}</li>
                    <li className='freeSans font-normal text-[16px] leading-[32px] font_color'>{t('advantages.2')}</li>
                    <li className='freeSans font-normal text-[16px] leading-[32px] font_color'>{t('advantages.3')}</li>
                </ul>

                <ButtonComponent name={t('order')} bg="#5939F5" color="#FFFFFF" size="14px"  py="7px" px="40px" order={'0'}/>

            </div>
        </div>
    </div>
  )
}
