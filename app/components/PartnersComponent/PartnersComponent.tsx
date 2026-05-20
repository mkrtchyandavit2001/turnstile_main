import React from 'react'
import { useTranslations } from 'next-intl'
import SwiperPartners from './SwiperPartners'

const PartnersComponent = () => {
    const t = useTranslations('PartnersComponent')
  return (
    <div className='flex flex-col items-center container'>
      <h2 className='text-[#0E0449] text-[28px] text-center font-bold
      lending-[10px] px-4 arm_Hmks_Bebas_Neue uppercase lg:text-[35px] md:text-[30px]'>
        {t('title')}
      </h2>
      <SwiperPartners/>
    </div>
  )
}

export default PartnersComponent
