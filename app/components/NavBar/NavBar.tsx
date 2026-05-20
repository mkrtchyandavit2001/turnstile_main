"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from "../../../public/images/navlogo.png"
import NavMenu from './NavMenu'
import SelectLng from '../SelectLng/SelectLng'
import BurgerMenuIcon from './BurgerMenuIcon'
import Link from 'next/link'
const NavBar = () => {
     const [lang, setLang] = useState('am');
    
      useEffect(() => {
        const cookieLang = document.cookie
          .split('; ')
          .find(row => row.startsWith('lang='))
          ?.split('=')[1] || 'am';
        setLang(cookieLang);
      }, []);
    
    return (
        <div className=' bg-white h-[66px] sticky top-0 z-50 border-b border-gray-200'>
            <div className='container flex justify-between items-center h-full max-lg:px-[20px] xl:px-[40px]'>
                <div className='h-full flex items-center gap-[40px]'>
                    {/* Logo */}
                    <Link className="flex items-center w-[54px]" href={`/${lang}`}>
                        <Image src={logo} alt="Webex" className='w-full'/>
                    </Link>

                    {/* Nav Menu */}
                    <NavMenu />
                </div>

                <div className='hidden lg:block'>
                    <SelectLng/>
                </div>

                <BurgerMenuIcon/>
            </div>
        </div>
    )
}

export default NavBar