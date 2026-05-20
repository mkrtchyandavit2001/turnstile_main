import Image from 'next/image'
import React from 'react'
import servicesCicleImg from '@/public//images/services_cycleImg.png'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import { useTranslations } from 'next-intl'
const TurnstileServicesCicyleSection = () => {
    const t = useTranslations('TurnstileServicesCicyleSection')
    return (
        <div className='turnstile_services_cycle_section py-[50px] px-[20px]'>
            <div className="container flex flex-wrap justify-between items-center gap-[50px]">
                <div className='w-[47%] max-lg:w-[90%] flex flex-col gap-[20px] items-start'>
                    <h2 className='text-[24px] leading-[28px] font-semibold Arm_Hmks_Bebas_Neue font_color'>{t('titles.0')}</h2>
                    <p className='font-normal freeSans leading-[32px] font_color text-[16px]'>{t('titles.1')}</p>
                    <ul className='list-disc list-inside flex flex-col gap-[10px]'>
                        <li className='font-normal freeSans leading-[32px] font_color text-[16px]'>{t('items.0')}</li>
                        <li className='font-normal freeSans leading-[32px] font_color text-[16px]'>{t('items.1')}</li>
                        <li className='font-normal freeSans leading-[32px] font_color text-[16px]'>{t('items.2')}</li>
                        <li className='font-normal freeSans leading-[32px] font_color text-[16px]'>{t('items.3')}</li>
                    </ul>
                    <ButtonComponent
                        name={t('btn')}
                        bg="#5939F5"
                        color="#FFFFFF"
                        size="16px"
                        px="15px"
                        py="7px"
                        redirect="https://calendly.com/webexprojects/30min?back=1&month=2024-11"
                    />
                </div>

                <div className='w-[47%] max-lg:w-[90%] items-center flex justify-end'>
                    <Image src={servicesCicleImg} alt='Turnstile' />
                </div>
            </div>
        </div>
    )
}

export default TurnstileServicesCicyleSection