'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
interface NavMenuItemProps {
  name: string;
  path: string;
  color?: string;
}

const NavMenuItem: React.FC<NavMenuItemProps> = ({ name, path, color }) => {

  const pathname = usePathname();
  const lang = pathname.split('/')[1] || 'am';

  // const [lang, setLang] = useState('am');

  // useEffect(() => {
  //   const cookieLang = document.cookie
  //     .split('; ')
  //     .find(row => row.startsWith('lang='))
  //     ?.split('=')[1] || 'am';
  //   setLang(cookieLang);
  //   console.log(4444444444, cookieLang)
  // }, []);

  return (
    <li>
      <Link href={`/${lang}${path}`} style={{ color: color }} className='text-[14px] focus:border-b border-[#0E0449] pb-[10px] hover:border-b font_color'>
        {name}
      </Link>
    </li>
  );
};

export default NavMenuItem;