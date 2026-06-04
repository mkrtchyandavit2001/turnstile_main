'use client';

import React, { useEffect, useState, useTransition } from 'react'; // ????????? ? useTransition
import NavMenuItem from './NavMenuItem';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation'; // ????????? ?

const NavMenu = () => {
  const t = useTranslations('NavMenu');
  const router = useRouter();
  const [isPending, startTransition] = useTransition(); // ??????? ??????
  const [lang, setLang] = useState('am');

  useEffect(() => {
    const cookieLang = document.cookie
      .split('; ')
      .find(row => row.startsWith('lang='))
      ?.split('=')[1] || 'am';
    setLang(cookieLang);
  }, []);

  // ??????? ??????? ???????? ????????? ?????????
  const handleNavigation = (path: string) => {
    startTransition(() => {
      // ??? path-? ????? ??????? ? ??????, ???? ????????????
      const targetUrl = path.startsWith(`/${lang}`) ? path : `/${lang}${path === '/' ? '' : path}`;
      router.push(targetUrl);
    });
  };

  return (
    <div className="relative h-full flex items-center">
      {/* ??????? Loader-? ?????? ????? ?????? ??????? */}
      {isPending && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
          <div className="w-12 h-12 border-4 border-t-[#5939F5] border-gray-200 rounded-full animate-spin"></div>
        </div>
      )}

      <ul className='hidden lg:flex h-full items-center gap-[18px]'>
        <NavMenuItem name={t('home')} path="/" onClick={() => handleNavigation('/')} />
        <NavMenuItem name={t('turnstile')} path="/turnstile" onClick={() => handleNavigation('/turnstile')} />
        <NavMenuItem name={t('security-systems')} path="/security-systems" onClick={() => handleNavigation('/security-systems')} />
        {/* <NavMenuItem name={t('smart-home')} path="/smart-home" onClick={() => handleNavigation('/smart-home')} />
        <NavMenuItem name={t('about-us')} path="/about-us" onClick={() => handleNavigation('/about-us')} /> */}
        <NavMenuItem name={t('catalog')} path="/catalog" onClick={() => handleNavigation('/catalog')} />
        <NavMenuItem name={t('crm-system')} path="/crm-system" onClick={() => handleNavigation('/crm-system')} />
        <NavMenuItem name={t('contact-us')} path="/contact-us" onClick={() => handleNavigation('/contact-us')} />
      </ul>
    </div>
  );
};

export default NavMenu;