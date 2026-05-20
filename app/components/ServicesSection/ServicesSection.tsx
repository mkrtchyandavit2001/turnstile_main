import { LineIcon } from '@/app/icons/LineIcon'
import Image from 'next/image'
import React from 'react'
import servicesImg from '@/public/images/servicesImg.png'
import { FaceIdIcon } from '@/app/icons/FaceIdIcon'
import { FingerprintIcon } from '@/app/icons/FingerprintIcon'
import { QrCodeIcon } from '@/app/icons/QrCodeIcon'
import { RFIdIcon } from '@/app/icons/RFIdIcon'
import { useTranslations } from 'next-intl'
import faceIDIg from '@/public/images/faceID.png'
import qrImg from '@/public/images/qrr1.png'
import fingerprintImg from '@/public/images/fingerprint.png'

const ServicesSection = () => {
    const t = useTranslations('ServicesSection')
    return (
        <div className='services_section'>
            <div className="container flex flex-col justify-center items-center">
                <div className='flex flex-col gap-[20px] justify-center items-center py-[50px] px-[20px]  max-w-[600px]'>
                    <div className='flex items-center justify-center gap-3'>
                        <span className='max-sm:hidden'><LineIcon width={27} height={2} color='#5939F5' /></span>
                        <h2 className='text-[24px] text-center font_color font-normal arm_Hmks_Bebas_Neue leading-[28.8px]'>{t('titles.0')}</h2>
                        <span className='max-sm:hidden'><LineIcon width={27} height={2} color='#5939F5' /></span>
                    </div>

                    <p className='font_color text-[16px] font-normal freeSans leading-[24px] text-center'>
                        {t('titles.1')}
                    </p>
                </div>

                <div className='relative'>
                    <Image src={servicesImg} alt='Services' className='max-lg:w-[400px] max-md:w-[300px] max-sm:w-[200px]' />

                    <div className='absolute top-[90px] left-[-170px] max-lg:top-[50px] max-md:left-[-120px] max-md:top-[10px] max-sm:left-[-40px] max-sm:w-[70px] flex items-center gap-2'>
                        <div className="group  cursor-pointer">
                            <FaceIdIcon width={32} height={32} color="#5939F5" />
                            <Image
                                src={faceIDIg}
                                alt="Services"
                                className="absolute top-[-30px] max-lg:top-[-40px] max-sm:top-[-60px] left-[480px] max-lg:left-[370px] max-md:left-[250px] max-sm:left-[120px]  invisible opacity-0 transform  transition-all duration-300 group-hover:opacity-100  group-hover:visible max-w-[100px]"
                            />
                        </div>
                        <span className='font_color text-[16px] max-md:text-[13px] max-sm:text-[11px] max-sm:hidden'>{t('items.0')}</span>
                    </div>

                    <div className='absolute top-[120px] right-[-200px] max-lg:top-[70px] max-md:right-[-130px] max-md:top-[10px] max-sm:right-[-70px]  max-sm:w-[70px] flex items-center gap-2'>
                        <div className="group   cursor-pointer">
                            <FingerprintIcon width={32} height={32} color="#5939F5" />
                            <Image
                                src={fingerprintImg}
                                alt="Services"
                                className="absolute top-[37px] max-lg:top-[27px] max-md:top-[65px] max-sm:top-[35px] left-[-244px] max-lg:left-[-150px] max-md:left-[-67px] max-sm:left-[-94px] invisible opacity-0 transform  transition-all duration-300 group-hover:opacity-100  group-hover:visible max-w-[100px] max-lg:max-w-[50px] max-md:max-w-[30px]"
                            />
                        </div>
                        <span className='font_color text-[16px] max-md:text-[13px] max-sm:text-[11px] max-sm:hidden'>{t('items.1')}</span>
                    </div>

                    <div className='absolute bottom-[130px] left-[-150px] max-lg:bottom-[80px] max-md:left-[-130px] max-md:bottom-[30px] max-sm:left-[-40px] max-sm:w-[70px] flex items-center gap-2'>
                        <div className="group  cursor-pointer">
                            <QrCodeIcon width={32} height={32} color="#5939F5" />
                            <Image
                                src={qrImg}
                                alt="Services"
                                className="absolute top-[-305px] max-lg:top-[-185px] max-md:top-[-165px] max-sm:top-[-90px] left-[490px] max-lg:left-[375px] max-md:left-[290px] max-sm:left-[145px] invisible opacity-0 transform  transition-all duration-300 group-hover:opacity-100  group-hover:visible max-w-[100px] max-lg:max-w-[50px] max-sm:max-w-[30px]"
                            />
                        </div>
                        <span className='font_color text-[16px] max-md:text-[13px] max-sm:text-[11px] max-sm:hidden'>{t('items.2')}</span>
                    </div>

                    <div className='absolute bottom-[140px] right-[-100px] max-lg:bottom-[80px] max-md:right-[-60px] max-md:bottom-[20px] max-sm:right-[-70px] max-sm:w-[70px] flex items-center gap-2'>
                        <div className="group cursor-pointer">
                            <RFIdIcon width={32} height={32} color="#5939F5" />
                            <Image
                                src={qrImg}
                                alt="Services"
                                className="absolute  top-[-300px] max-lg:top-[-186px] max-md:top-[-170px] max-sm:top-[-100px] left-[-264px] max-lg:left-[-157px] max-md:left-[-87px] max-sm:left-[-94px] invisible opacity-0 transform  transition-all duration-300 group-hover:opacity-100  group-hover:visible max-w-[100px] max-lg:max-w-[50px] max-md:max-w-[30px]"
                            />
                        </div>
                        <span className='font_color text-[16px] max-md:text-[13px] max-sm:text-[11px] max-sm:hidden'>{t('items.3')}</span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ServicesSection