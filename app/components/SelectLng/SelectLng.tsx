'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { BottomArrowIcon } from '@/app/icons/BottomArrowIcon';

const LANGUAGES = [
  { code: 'am', label: 'ARM' },
  { code: 'en', label: 'ENG' },
  { code: 'ru', label: 'РУС' },
];

const SelectLng = () => {
  const [currentLng, setCurrentLng] = useState('am'); // Default language
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const lang = pathname.split('/')[1];

  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  };

  // const getCookie = (name: string) => {
  //   const cookies = document.cookie.split('; ');
  //   const cookie = cookies.find((c) => c.startsWith(`${name}=`));
  //   return cookie ? cookie.split('=')[1] : null;
  // };

  // useEffect(() => {
  //   const savedLang = getCookie('lang') || 'am';
  //   setCurrentLng(savedLang);
  // }, []);

  useEffect(() => {
    const langFromUrl = pathname.split('/')[1] || 'am';
    setCurrentLng(langFromUrl);
    setCookie('lang', langFromUrl, 365);

  }, [pathname]);



  // const changeLanguage = (lng: string) => {
  //   const slicePathname = pathname.slice(3); // remove current language from path
  //   setCurrentLng(lng);
  //   setCookie('lang', lng, 365);
  //   router.push(`/${lng}${slicePathname}`);
  // };

  const changeLanguage = (lng: string) => {
    const segments = pathname.split('/');
    segments[1] = lng;

    setCurrentLng(lng);
    setCookie('lang', lng, 365);

    router.push(segments.join('/'));
  };

  // Ստեղծում ենք հաջորդ լեզվի ընտրություն՝ ցիկլիկորեն
  const getNextLanguages = () => {
    return LANGUAGES.filter((lang) => lang.code !== currentLng);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 font_color flex items-center gap-2"
      >
        {LANGUAGES.find((lang) => lang.code === currentLng)?.label}
        <BottomArrowIcon color="black" />
      </button>

      {isOpen && (
        <div
          className="absolute bg-white rounded-md shadow-lg transform transition-all ease-in-out duration-200"
          style={{ transform: 'translateY(0)' }}
        >
          {getNextLanguages().map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className="font_color block px-4 py-2 hover:bg-gray-100 w-full text-left"
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectLng;
