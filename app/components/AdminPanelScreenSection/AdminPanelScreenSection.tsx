import { LineIcon } from '@/app/icons/LineIcon'
import React from 'react'
import AdminPanelScreenSlider from './AdminPanelScreenSlider'
import { useTranslations } from 'next-intl'

const AdminPanelScreenSection = () => {
    const t = useTranslations('AdminPanelScreenSection')
    return (
        <div className='admin_panel_screen_section'>
            <div className="container flex flex-col gap-[20px] justify-center items-center">
                <div className='flex flex-col gap-[20px] justify-center items-center px-[20px]  max-w-[600px]'>
                    <div className='flex items-center justify-center gap-3'>
                        <span className='max-sm:hidden'><LineIcon width={27} height={2} color='#5939F5' /></span>
                        <h2 className='text-[24px] text-center font_color font-normal arm_Hmks_Bebas_Neue leading-[28.8px]'>{t('titles.0')}</h2>
                        <span className='max-sm:hidden'><LineIcon width={27} height={2} color='#5939F5' /></span>
                    </div>

                    <p className='font_color text-[16px] font-normal freeSans leading-[24px] text-center'>
                        {t('titles.1')}
                    </p>
                </div>

                <AdminPanelScreenSlider/>
            </div>
        </div>
    )
}

export default AdminPanelScreenSection