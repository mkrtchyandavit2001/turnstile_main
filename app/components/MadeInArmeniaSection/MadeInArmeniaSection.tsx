import React from 'react'
import ourWorksBackground from '@/public/images/our_works_sectionBackground.png'
import { LineIcon } from '@/app/icons/LineIcon'
import { useTranslations } from 'next-intl'
import ButtonParrentComponent from '../ButtonParrentComponent/ButtonParrentComponent'

const MadeInArmeniaSection = () => {
    const t = useTranslations('MadeInArmeniaSection')
    return (
        <div style={{ backgroundImage: `url(${ourWorksBackground.src})` }} className="made_in_armenia_section bg-cover bg-center bg-no-repeat">
            <div className="container flex flex-col gap-[30px] justify-center items-center">
                <div className='flex flex-col gap-[50px] justify-center items-center py-[50px] px-[20px] md:p-[90px] max-w-[800px]'>
                    <div className='flex items-center justify-center gap-3'>
                        <span className='max-sm:hidden'><LineIcon width={27} height={2} color='#5939F5'/></span>
                        <h2 className='text-[24px] text-center text-white font-normal arm_Hmks_Bebas_Neue leading-[28.8px]'>{t('title')}</h2>
                        <span className='max-sm:hidden'><LineIcon width={27} height={2} color='#5939F5'/></span>
                    </div>

                    <p className='text-white text-[16px] font-normal freeSans leading-[24px] text-center'>
                        {t('description')}
                    </p>
                    {/* <ButtonComponent name={t('view_more_btn')} path={`${lang}/catalog`} bg="transparent" color="#FFFFFF" size="14px" border="1px solid white" py="9px" px="40px"/>  */}
                    <ButtonParrentComponent btnText={t('view_more_btn')} />
                </div>

            </div>
        </div>
    )
}

export default MadeInArmeniaSection