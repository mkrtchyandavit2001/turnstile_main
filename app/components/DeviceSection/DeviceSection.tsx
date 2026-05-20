import React from 'react'
import deviceSectionBackground from '@/public/images/deviceSectionImg.png'
import { LineIcon } from '@/app/icons/LineIcon'
import faceIdDeviceImg from '@/public/images/faceIdDeviceImg.png'
import qrDeviceImg from '@/public/images/QrDeviceImg.png'
import shelfDeviceImg from '@/public/images/TM11Img2.png'
import Image, { StaticImageData } from 'next/image'
import { useTranslations } from 'next-intl'
interface IDevice {
    id: string;
    title: string;
    img: StaticImageData; 
  }

interface IProps {
    title: string
    description: string
}
const DeviceSection = ({title, description}: IProps) => {
    const t = useTranslations('DeviceSection')

    const deviceData: IDevice[] = [
        {
            id: '1',
            title: t('items.0'),
            img: faceIdDeviceImg
        },
        {
            id: '2',
            title: t('items.1'),
            img: qrDeviceImg
        },
        {
            id: '3',
            title: t('items.2'),
            img: shelfDeviceImg
        }
    ]
    return (
        <div style={{ backgroundImage: `url(${deviceSectionBackground.src})` }} className='device_section py-[50px] max-xl:pt-[150px] bg-cover bg-center bg-no-repeat'>
            <div className="container flex flex-col gap-[50px] justify-center items-center">
                <div className='flex flex-col gap-[20px] justify-center items-center px-[20px]  max-w-[600px]'>
                    <div className='flex items-center justify-center gap-3'>
                        <span className='max-sm:hidden'><LineIcon width={27} height={2} color='#5939F5' /></span>
                        <h2 className='text-[24px] text-center font_color font-normal arm_Hmks_Bebas_Neue leading-[28.8px]'>{t(`${title}`)}</h2>
                        <span className='max-sm:hidden'><LineIcon width={27} height={2} color='#5939F5' /></span>
                    </div>

                    <p className='font_color text-[16px] font-normal freeSans leading-[24px] text-center'>
                    {t(`${description}`)}
                    </p>
                </div>

                <div className='flex flex-wrap justify-center gap-[20px]'>
                    {
                        deviceData.map((device: IDevice) => (
                            <div key={device.id} className='flex flex-col  gap-[10px] w-[400px] max-md:w-[300px] justify-center'>
                                <Image src={device.img} alt='Device' className='w-full h-[250px] object-cover' />
                                <p className='font_color font-normal text-[16px] leading-[24px] freeSans'>{device.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default DeviceSection