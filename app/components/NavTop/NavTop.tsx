import { LocationIcon } from '@/app/icons/Location';
import { MailIcon } from '@/app/icons/MailIcon';
import { PhoneIcon } from '@/app/icons/PhoneIcon';
import React from 'react';
import Image from 'next/image';
import navTopImg1 from '@/public/images/navTopTransparentImg1.png';
import navTopImg2 from '@/public/images/navTopTransparentImg2.png';
import { useTranslations } from 'next-intl';

const NavTop = () => {
  const t = useTranslations('NavTop');
  return (
    <div className="relative h-[80px] md:h-[34px] bg-[#5939F5] max-md:py-2 max-lg:hidden">
      <div className="container flex justify-between items-center h-full px-2 md:px-12 max-md:flex-col max-md:justify-center max-md:items-start gap-2">

        {/* Location Section */}
        <div className="flex items-center gap-3">
          <LocationIcon width={16} height={22} color="#fff" />
          <a
            href="https://www.google.com/maps/place/79+%D5%84%D5%A1%D6%80%D5%B7%D5%A1%D5%AC+%D4%B2%D5%A1%D5%B2%D6%80%D5%A1%D5%B4%D5%B5%D5%A1%D5%B6%D5%AB+%D5%BA%D5%B8%D5%B2%D5%B8%D5%BF%D5%A1,+%D4%B5%D6%80%D6%87%D5%A1%D5%B6+0033/@40.1956465,44.4945423,17z/data=!3m1!4b1!4m6!3m5!1s0x406abd98a7cf7d11:0xfbd1c95b36d7c13!8m2!3d40.1956465!4d44.4945423!16s%2Fg%2F11y3x170zy?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fff] text-[14px] font-normal z-10"
          >
            {t('address')}
          </a>
        </div>

        {/* Contact Section */}
        <div className="flex items-center gap-5 z-10 max-md:flex-col max-md:items-start">
          {/* Email */}
          <div className="flex items-center gap-3">
            <MailIcon width={24} height={16} color="#fff" />
            <a
              href="mailto:info@webex.am"
              className="text-[#fff] text-[14px] font-normal"
            >
              info@webex.am
            </a>
          </div>

          {/* Divider */}
          <span className=" hidden md:block w-[1px] h-[20px] bg-[#fff]"></span>

          {/* Phone Numbers */}
          <div className="flex items-center gap-3 max-md:items-start">
            <PhoneIcon width={15} height={16} color="#fff" />
            <div className="flex items-center gap-3">
              <a
                href="tel:+37496101017"
                className="text-[#fff] text-[14px] font-normal"
              >
                +374 96-10-10-17
              </a>
              <a
                href="tel:+37496400073"
                className="text-[#fff] text-[14px] font-normal"
              >
                +374 96-40-00-73
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Images */}
      <Image
        src={navTopImg1}
        alt="Decorative Left Image"
        className=" hidden md:block absolute top-0 left-0"
      />
      <Image
        src={navTopImg2}
        alt="Decorative Right Image"
        className="hidden md:block absolute top-0 right-0"
      />
    </div>
  );
};

export default NavTop;
