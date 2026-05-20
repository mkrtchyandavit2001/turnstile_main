import React from 'react'
import service_info_img1 from '@/public/images/info_servicesItemImg1.png'
import service_info_img2 from '@/public/images/info_servicesItemImg2.png'
import service_info_img3 from '@/public/images/info_servicesItemImg3.png'
import { StaticImageData } from 'next/image'
import { useTranslations } from 'next-intl'
import ButtonParrentComponent from '../ButtonParrentComponent/ButtonParrentComponent'


interface IServicesItem {
    id: string,
    img: StaticImageData,
    title: string,
    route: string;
}
const InfoServices = () => {
    const t = useTranslations("InfoServices")
    
    const servicesData: IServicesItem[] = [
        {
            id: '1',
            img: service_info_img1,
            title: t("titles.0"),
            route: `/turnstile`,
        },

        {
            id: '2',
            img: service_info_img2,
            title: t("titles.1"),
            route: `/smart-home`,
        },

        {
            id: '3',
            img: service_info_img3,
            title: t("titles.2"),
            route: `/security-systems`,
        },
    ]
    return (
        <div className='info_services mt-20 pt-6 mb-10'>
            <h2 className='mb-10 text-[#0E0449] text-[28px] text-center font-bold
                    lending-[10px] px-4 arm_Hmks_Bebas_Neue uppercase lg:text-[35px] md:text-[30px]'>
                {t('h2')}
            </h2>
           
            <div className="container flex flex-wrap justify-center gap-[20px] px-[20px]">
                {
                    servicesData.map((service: IServicesItem) => (
                        <div style={{ backgroundImage: `url(${service.img.src})` }} key={service.id} className='flex items-center justify-end gap-[20px] bg-cover bg-center bg-no-repeat grow basis-[300px] h-[264px] rounded'>
                            <div className='flex flex-col gap-[20px] items-start max-w-[150px] mr-[50px]'>
                                <h3 className='text-[22px] font_color font-semibold  leading-[32px] w-full arm_Hmks_Bebas_Neue'>{service.title}</h3>
                                
                                
                                {
                                    service.id !== "2" && <ButtonParrentComponent  btnText={t('btn')}/>
                                }

                                
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default InfoServices