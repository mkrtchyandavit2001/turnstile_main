import React from 'react'
import VideoComonent from '../VideoComonent/VideoComonent'
import turnstileInfoBackground from '@/public/images/TurnstileInfoSectionBackground.png'
import thumbImg  from '@/public/images/turnstileInfoSectoionVideoThumb.png'
import { AngleTopLeftIcon } from '@/app/icons/AngleTopLeftIcon'
import { AngleTopRightIcon } from '@/app/icons/AngleTopRightIcon'
import { AngleBottomLeftIcon } from '@/app/icons/AngleBottomLeftIcon'
import { AngleBottomRightIcon } from '@/app/icons/AngleBottomRightIcon'
import { useTranslations } from 'next-intl'
import ButtonParrentComponent from '../ButtonParrentComponent/ButtonParrentComponent'
export const TurnstileInfoSection = () => {
    const t = useTranslations('TurnstileInfoSection')
    return (
        <div style={{backgroundImage: `url(${turnstileInfoBackground.src})`}} className='turnstile_info_section bg-cover bg-center bg-no-repeat px-[20px]'>
            <div className="container flex justify-between  items-center py-[70px]  max-md:flex-col max-md:gap-[50px]">
                <div className='w-[45%] max-md:w-[85%] flex flex-col gap-[20px] justify-center items-start'>
                    <h2 className='Arm_Hmks_Bebas_Neue font-semibold text-[24px] font_color leading-[28.8px]'>{t('title')}</h2>
                    <p className='font-normal text-[16px] leading-[32px] freeSans font_color'>{t('description')}</p>
                    {/* <ButtonComponent path={`${lang}/catalog`}  name={t('view_more_btn')} bg='#5939F5' color="#FFFFFF" size='14px' py='7px' px='20px'/> */}
                    <ButtonParrentComponent btnText={t('view_more_btn')} />

                </div>

                <div className='w-[45%] max-md:w-[85%] flex justify-center items-center '>
                    <div className='w-[100%] h-[300px] md:w-[640px] md:h-[384px] relative '>
                        <VideoComonent path="/videos/Our_Work.mp4" thumb={thumbImg.src}/>
                        <span className='absolute top-[-20px] left-[-20px]'><AngleTopLeftIcon width={26} height={26} color="#5939F5"/></span>
                        <span className='absolute top-[-20px] right-[-20px]'><AngleTopRightIcon width={26} height={26} color="#5939F5"/></span>
                        <span className='absolute bottom-[-20px] left-[-20px]'><AngleBottomLeftIcon width={26} height={26} color="#5939F5"/></span>
                        <span className='absolute bottom-[-20px] right-[-20px]'><AngleBottomRightIcon width={26} height={26} color="#5939F5"/></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
