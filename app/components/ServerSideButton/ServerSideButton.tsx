'use client'; // Add this line to make it a client component

import Link from 'next/link';
import React, { ReactNode, useEffect, useState } from 'react';

interface IButtonProps {
  name: string;
  path?: string;
  bg?: string;
  color?: string;
  size?: string;
  py?: string;
  px?: string;
  width?: string;
  icon?: ReactNode;
  customClass?: string;
}

const ServerSideButton = ({ name, path, bg, color, size, py, px, width, icon, customClass }: IButtonProps) => {
  const [lang, setLang] = useState('am');

  useEffect(() => {
    // Read the cookie on the client side
    const cookieLang = document.cookie
      .split('; ')
      .find(row => row.startsWith('lang='))
      ?.split('=')[1] || 'am';
    setLang(cookieLang);
  }, []);

  const currentPath = path && path !== '/calendar' ? `/${path}` : '';

  return (
    <Link
      href={`/${lang}${currentPath}`}
      style={{
        backgroundColor: bg,
        color: color,
        fontSize: size,
        border: "none",
        padding: `${py} ${px}`,
        width: width,
      }}
      className={`rounded-[4px] freeSans flex ${width ? 'justify-center' : 'justify-start'} items-center ${customClass}`}
    >
      {name}
      {icon && <span className="ml-3 text-sm text-white">{icon}</span>}
    </Link>
  );
};

export default ServerSideButton;