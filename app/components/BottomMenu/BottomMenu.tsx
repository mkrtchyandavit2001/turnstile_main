'use client'
import { LocationIcon } from '@/app/icons/Location';
import { SendMailIcon } from '@/app/icons/MailIcon';
import { PhoneAndMessageIcon, PhoneIcon } from '@/app/icons/PhoneIcon';
import { MessageIcon } from '@/app/icons/MessageIcon';
import { WhatsAppIcon } from '@/app/icons/WhatsAppIcon';
import React, { useEffect, useState } from 'react';
import { TelegramIcon } from '@/app/icons/TelegramIcon';

const BottomMenu = () => {
    const [activeContactModal, setActiveContactModal] = useState(false);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest('.message_modal') && !target.closest('.phone_icon')) {
                setActiveContactModal(false);
            }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [])

    return (
        <div className='sm:hidden h-[80px] bg-white w-full fixed bottom-0 z-30 flex justify-between items-center px-[30px]  shadow-2xl shadow-black'>
            <a
                href="https://www.google.com/maps/place/79+%D5%84%D5%A1%D6%80%D5%B7%D5%A1%D5%AC+%D4%B2%D5%A1%D5%B2%D6%80%D5%A1%D5%B4%D5%B5%D5%A1%D5%B6%D5%AB+%D5%BA%D5%B8%D5%B2%D5%B8%D5%BF%D5%A1,+%D4%B5%D6%80%D6%87%D5%A1%D5%B6+0033/@40.1956465,44.4945423,17z/data=!3m1!4b1!4m6!3m5!1s0x406abd98a7cf7d11:0xfbd1c95b36d7c13!8m2!3d40.1956465!4d44.4945423!16s%2Fg%2F11y3x170zy?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
            >
                <LocationIcon width={24} height={32} color='#A0A0A0' />
            </a>

            <a href="mailto:info@webex.am">
                <SendMailIcon width={30} height={32} color="#A0A0A0" />
            </a>

            <div
                style={{ backgroundColor: activeContactModal ? '#5D64FF' : 'transparent' }}
                className='relative p-[10px] rounded-full phone_icon'
            >
                <span onClick={() => setActiveContactModal(!activeContactModal)}>
                    <PhoneAndMessageIcon
                        width={34}
                        height={32}
                        color={activeContactModal ? 'white' : '#A0A0A0'}
                    />
                </span>

                {activeContactModal && (
                    <div className='message_modal w-[71px] py-[20px] flex flex-col gap-[15px] items-center bg-white shadow-2xl shadow-black absolute top-[-320px] right-[-10px] rounded-full'>
                        <a href="tel:+37496400073" className='bg-black w-[49px] h-[49px] flex justify-center items-center rounded-full'>
                            <PhoneIcon width={18} height={19} color='white'/>
                        </a>
                        <a href="https://wa.me/79607707907" target='_blanc' className='bg-[#4CAF50] w-[49px] h-[49px] flex justify-center items-center  rounded-full'>
                            <WhatsAppIcon width={61} height={61} color='white'/>
                        </a>
                        <a href="https://web.telegram.org/a/#1186952834" target='_blanc' className='bg-[#039BE5] w-[49px] h-[49px] flex justify-center items-center rounded-full'>
                            <TelegramIcon width={27} height={23} color='white'/>
                        </a>
                        <a href="https://calendly.com/webexprojects/30min?back=1&month=2024-12" target='_blanc' className='bg-[#3F8FB7] w-[49px] h-[49px] flex justify-center items-center rounded-full'>
                            <MessageIcon width={28} height={27} color='white'/>
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BottomMenu;
