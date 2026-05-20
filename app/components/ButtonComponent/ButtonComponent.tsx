'use client'
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { toggleConsultingModal } from '@/app/store/slices/consultingModalSlice/consultingModalSlice';


interface IButtonProps {
  name: string;
  path?: string;
  bg?: string;
  color?: string;
  size?: string;
  border?: string;
  py?: string;
  px?: string;
  width?: string;
  icon?: ReactNode;
  customClass?: string;
  redirect?: string;
  order?: string;
}
const ButtonComponent = ({ name, path, bg, color, size, border = 'none', py, px, width, icon, customClass, redirect, order}: IButtonProps) => {
  const dispatch = useDispatch()
  const currentPath = path && path !== '/calendar' ? `${path}` : '';
  
  const handleButtonClick = () => {
    if (redirect) {
      window.open(redirect, '_blank'); 
    }
    if (order && order !== '0') {
      dispatch(toggleConsultingModal({isview:true, orderCode: order}))
    }
    else if(order === '0') {
      dispatch(toggleConsultingModal({isview:true, orderCode: ''}))
    }
  };
  return (
    <Link href={currentPath}
    onClick={handleButtonClick}
      style={{
        backgroundColor: bg,
        color: color,
        fontSize: size,
        border: border,
        padding: `${py} ${px}`,
        width: width,
      }}
      className={`rounded-[4px] freeSans flex ${width ? 'justify-center' : 'justify-start'}  items-center ${customClass}`}
    >
      {name}
      {icon && <span className="ml-3 text-sm text-white">{icon} </span>}
      </Link>
  );
};

export default ButtonComponent;
