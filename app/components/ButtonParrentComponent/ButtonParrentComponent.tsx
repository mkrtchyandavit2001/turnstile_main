'use client'; // Add this line to make it a client component

import React, { ReactNode, useEffect, useState } from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

interface ButtonParent {
  btnText: string,
  bg?: string,
  color?: string,
  border?: boolean,
  size?: string,
  icon?: ReactNode,
  customClass?: string,
}
const ButtonParrentComponent = ({ btnText, bg, color, border, size, icon, customClass }: ButtonParent ) => {
  const [lang, setLang] = useState('am');

  useEffect(() => {
    // Read the cookie on the client side
    const cookieLang = document.cookie
      .split('; ')
      .find(row => row.startsWith('lang='))
      ?.split('=')[1] || 'am';
    setLang(cookieLang);
  }, []);

  return (
    <ButtonComponent
      path={`/${lang}/catalog`}
      name={btnText}
      bg={bg || "#5939F5"}
      color={color || "#FFFFFF"}
      size={size || "14px"}
      border={border ? "1px solid #5939F5" : "none"}
      py="9px"
      px="40px"
      icon={icon}
      customClass={customClass}
    />
  );
};

export default ButtonParrentComponent;