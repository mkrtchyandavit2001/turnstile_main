import React from 'react'
import NavMenuItem from './NavMenuItem'
import { useTranslations } from 'next-intl'

const NavMenu = () => {
  const t = useTranslations('NavMenu')
  return (
    <ul className='hidden lg:flex h-full items-center gap-[18px]'>
        <NavMenuItem name={t('home')} path="/" />
        <NavMenuItem name={t('turnstile')} path="/turnstile" />
        <NavMenuItem name={t('security-systems')} path="/security-systems" />
        {/* <NavMenuItem name={t('smart-home')} path="/smart-home" />
        <NavMenuItem name={t('about-us')} path="/about-us" /> */}
        <NavMenuItem name={t('catalog')} path="/catalog" />
        <NavMenuItem name={t('crm-system')} path="/crm-system" />
        <NavMenuItem name={t('contact-us')} path="/contact-us" />

    </ul>
  )
}

export default NavMenu