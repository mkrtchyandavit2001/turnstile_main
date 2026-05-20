'use client'

import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/app/hooks';
import { toggleBurgerMenu } from '@/app/store/slices/burgerMenuSlice/burgerMenuSlice';
import Link from 'next/link';
import React from 'react';

interface IProps {
  name: string;
  path: string;
}

const getLanguageFromCookies = () => {
  const cookie = document.cookie.split('; ').find(row => row.startsWith('lang='));
  return cookie ? cookie.split('=')[1] : 'am';  // Default to 'am' if not found
};

const BurgerMenuItem = ({ name, path }: IProps) => {
  const dispatch = useAppDispatch();
  const [lang, setLang] = useState<string>('am');

  useEffect(() => {
    setLang(getLanguageFromCookies());
  }, []);

  const handleBurgerItemClick = () => {
    dispatch(toggleBurgerMenu());
  };

  return (
    <li className="w-full h-[50px] px-[20px] border-b border-gray-200 hover:bg-gray-200" onClick={handleBurgerItemClick}>
      <Link
        href={`/${lang}${path}`}
        className="text-[16px] font_color font-normal w-full h-full flex items-center "
      >
        {name}
      </Link>
    </li>
  );
};

export default BurgerMenuItem;
