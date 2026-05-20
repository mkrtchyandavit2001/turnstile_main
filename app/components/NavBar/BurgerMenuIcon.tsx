'use client'
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { selectIsOpenBurgerMenu, toggleBurgerMenu } from '@/app/store/slices/burgerMenuSlice/burgerMenuSlice';
import React from 'react';

const BurgerMenuIcon = () => {
    const isOpenBurgerMenu = useAppSelector(selectIsOpenBurgerMenu)
    const dispatch = useAppDispatch()

    
    const toggleMenu = () => {
        dispatch(toggleBurgerMenu())
    };

    return (
        <div
            className={`burgerIcon  flex flex-col gap-[6px] cursor-pointer lg:hidden ${isOpenBurgerMenu ? 'open' : ''}`}
            onClick={toggleMenu}
        >
            <span
                className={`w-[30px] h-[3px] bg-black rounded transition-transform duration-300 ${
                    isOpenBurgerMenu ? 'transform rotate-45 translate-y-[9px]' : ''
                }`}
            ></span>
            <span
                className={`w-[30px] h-[3px] bg-black rounded transition-opacity duration-300 ${
                    isOpenBurgerMenu ? 'opacity-0' : ''
                }`}
            ></span>
            <span
                className={`w-[30px] h-[3px] bg-black rounded transition-transform duration-300 ${
                    isOpenBurgerMenu ? 'transform -rotate-45 -translate-y-[9px]' : ''
                }`}
            ></span>
        </div>
    );
};

export default BurgerMenuIcon;
