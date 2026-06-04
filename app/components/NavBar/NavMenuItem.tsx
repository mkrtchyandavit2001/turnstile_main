'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

interface NavMenuItemProps {
  name: string;
  path: string;
  color?: string;
  onClick?: (e: React.MouseEvent) => void; // ????????? ? onClick ?????? ??????? ?????
}

const NavMenuItem: React.FC<NavMenuItemProps> = ({ name, path, color, onClick }) => {
  const pathname = usePathname();
  const lang = pathname.split('/')[1] || 'am';

  return (
    <li>
      <a 
        href={`/${lang}${path}`} 
        style={{ color: color }} 
        className='text-[14px] focus:border-b border-[#0E0449] pb-[10px] hover:border-b font_color cursor-pointer'
        onClick={(e) => {
          if (onClick) {
            e.preventDefault(); // ????????? ??? ????????? ???????, ??????? NavMenu-? loader-? ??????
            onClick(e);
          }
        }}
      >
        {name}
      </a>
    </li>
  );
};

export default NavMenuItem;