import Image from 'next/image'
import React from 'react'
import footerLogo from '@/public/images/footer_logo.png'
import { PhoneIcon } from '@/app/icons/PhoneIcon'
import { MailIcon } from '@/app/icons/MailIcon'
import { LocationIcon } from '@/app/icons/Location'
import { FbIcon } from '@/app/icons/FbIcon'
import { InstagramIcon } from '@/app/icons/InstagramIcon'
import { LinkedinIcon } from '@/app/icons/LinkedinIcon'
import NavMenuItem from '../NavBar/NavMenuItem'
import { useTranslations } from 'next-intl'

const Footer = () => {
    const t = useTranslations('')

    return (
        <footer className='footer bg-[#0E0449] p-[50px] max-sm:pb-[100px] max-sm:px-[20px]'>
            <div className="container flex justify-between flex-wrap gap-[20px]">

                {/* Логотип и создание сайта */}
                <div>
                    <Image src={footerLogo} alt='Webex.am' width={100} height={100} className='w-[100px]' />
                    <h2 className='freeSans text-white text-[20px]'>
                        {t('create_by_webex.0')}
                        <a
                            href="https://www.webex.am/am/"
                            target='_blank'
                            rel='noopener noreferrer'
                            className='underline'
                        >
                            {t('create_by_webex.1')}
                        </a>
                        {t('create_by_webex.2')}
                    </h2>
                </div>

                {/* Навигация */}
                <nav>
                    <ul className='flex flex-col gap-[10px]' >
                        <NavMenuItem name={t('NavMenu.home')} path="/" color="white" />
                        <NavMenuItem name={t('NavMenu.turnstile')} path="/turnstile" color="white" />
                        <NavMenuItem name={t('NavMenu.security-systems')} path="/security-systems" color="white" />
                        <NavMenuItem name={t('NavMenu.catalog')} path="/catalog" color="white" />
                        <NavMenuItem name={t('NavMenu.crm-system')} path="/crm-system" color="white" />
                        <NavMenuItem name={t('NavMenu.contact-us')} path="/contact-us" color="white" />
                    </ul>
                </nav>

                {/* Контакты */}
                <address className="flex flex-col gap-[15px] not-italic">
                    <div className='flex items-center gap-[10px]'>
                        <PhoneIcon width={17} height={18} color="#FFFFFF" />
                        <div className='flex flex-col gap-[5px]'>
                            <a href="tel:+37496101017" className='arm_Hmks_Bebas_Neue font-normal text-[14px] text-white leading-[19.07px] underline'>+374 96-10-10-17</a>
                            <a href="tel:+37496400073" className='arm_Hmks_Bebas_Neue font-normal text-[14px] text-white leading-[19.07px] underline'>+374 96-40-00-73</a>
                        </div>
                    </div>

                    <div className='flex items-center gap-[10px]'>
                        <MailIcon width={24} height={16} color="#FFFFFF" />
                        <a href="mailto:info@webex.am" className='arm_Hmks_Bebas_Neue font-normal text-[14px] text-white leading-[19.07px] underline'>info@webex.am</a>
                    </div>

                    <div className='flex items-center gap-[10px]'>
                        <LocationIcon width={16} height={22} color="#FFFFFF" />
                        <a
                            href="https://www.google.com/maps/search/%D4%B2%D5%A1%D5%B2%D6%80%D5%A1%D5%B4%D5%B5%D5%A1%D5%B6+%D5%BA%D5%B8%D5%B2.+79,+1%2F1/@40.1956506,44.4919674,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                            target='_blank'
                            rel='noopener noreferrer'
                            className='arm_Hmks_Bebas_Neue font-normal text-[14px] text-white leading-[19.07px] underline'
                        >
                            {t('NavTop.address')}
                        </a>
                    </div>
                </address>

                {/* Социальные сети */}
                <div className='flex items-center gap-[20px]'>
                    <a
                        href='https://www.facebook.com/people/%D5%8F%D5%B8%D6%82%D5%BC%D5%B6%D5%AB%D5%AF%D5%A5%D5%BF%D5%B6%D5%A5%D6%80%D5%AB-%D5%BE%D5%A1%D5%B3%D5%A1%D5%BC%D6%84/61562110601452/'
                        target='_blank'
                        rel='nofollow noopener noreferrer'
                        aria-label="Facebook"
                        className='w-[43px] h-[43px] flex justify-center items-center border border-white rounded'
                    >
                        <FbIcon />
                    </a>
                    <a
                        href='https://www.instagram.com/web_ex.tech/'
                        target='_blank'
                        rel='nofollow noopener noreferrer'
                        aria-label="Instagram"
                        className='w-[43px] h-[43px] flex justify-center items-center border border-white rounded'
                    >
                        <InstagramIcon />
                    </a>
                    <a
                        href='https://www.linkedin.com/groups/13856890/'
                        target='_blank'
                        rel='nofollow noopener noreferrer'
                        aria-label="LinkedIn"
                        className='w-[43px] h-[43px] flex justify-center items-center border border-white rounded'
                    >
                        <LinkedinIcon />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer