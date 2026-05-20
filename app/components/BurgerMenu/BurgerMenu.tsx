
'use client'
import React from 'react';
import BurgerMenuItem from './BurgerMenuItem';
import { useAppSelector } from '@/app/hooks';
import { selectIsOpenBurgerMenu } from '@/app/store/slices/burgerMenuSlice/burgerMenuSlice';
import SelectLng from '../SelectLng/SelectLng';
import { useTranslations } from 'next-intl';

const BurgerMenu = () => {
    const isOpenBurgerMenu = useAppSelector(selectIsOpenBurgerMenu);
      const t = useTranslations('NavMenu')
    

    return (
        <div className={`burger-menu fixed top-[96px] right-0 w-full md:w-[400px] h-full bg-white shadow-lg transform transition-transform duration-300 ${isOpenBurgerMenu ? 'translate-x-0' : 'translate-x-full'
            } z-50`}>
            <ul className='flex flex-col w-full'>
                <BurgerMenuItem name={t('home')} path="/" />
                <BurgerMenuItem name={t('turnstile')} path="/turnstile" />
                <BurgerMenuItem name={t('security-systems')} path="/security-systems" />
                {/* <BurgerMenuItem name={t('smart-home')} path="/smart-home" />
                <BurgerMenuItem name={t('about-us')} path="/about-us" /> */}
                <BurgerMenuItem name={t('catalog')} path="/catalog" />
                <BurgerMenuItem name={t('crm-system')} path="/crm-system" />
                <BurgerMenuItem name={t('contact-us')} path="/contact-us" />
            </ul>
            <div className='px-[10px]'>
                <SelectLng />
            </div>
        </div>
    );
};

export default BurgerMenu;
