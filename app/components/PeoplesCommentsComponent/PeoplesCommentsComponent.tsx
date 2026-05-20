import { LineIcon } from '@/app/icons/LineIcon'
import { useTranslations } from 'next-intl'
import React from 'react'
import SwiperComments from './SwiperComments'

const PeoplesCommentsComponent = () => {
  const t = useTranslations('TitleOpinionOfOurClients')
  return (
    <div className='container flex flex-col items-center py-10 px-10 gap-[45px]'>
      <div className="flex items-center justify-center gap-3 px-10">
        <span className='max-sm:hidden'>
          <LineIcon width={25} height={2} color="#5939F5"/>
        </span>
        <h2 className="text-[24px] text-center font_color font-normal arm_Hmks_Bebas_Neue leading-[28.8px]">
          {t('title')}
        </h2>
         <span className='max-sm:hidden'>
          <LineIcon width={25} height={2} color="#5939F5"/>
        </span>
      </div>
        
        <SwiperComments/>
     
    </div>
  )
}

export default PeoplesCommentsComponent
