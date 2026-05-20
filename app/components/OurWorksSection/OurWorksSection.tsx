import { LineIcon } from '@/app/icons/LineIcon'
import React from 'react'
import ourWorksBackground from '@/public/images/our_works_sectionBackground.png'
import VideoComponent from '../VideoComonent/VideoComonent'
import { useTranslations } from 'next-intl'
import { StaticImageData } from 'next/image'
import PZS3_img from '@/public/images/superMarketPz.jpg'
import PZ20_img from '@/public/images/PZ-20.jpg'
import PZ14_img from '@/public/images/PZ-14.png'
import PZ9_img from "@/public/images/PZ-9.jpeg"
import PZ17_img from "@/public/images/PZ-17.jpg"
import PZ21_img from "@/public/images/PZ-21.jpg"
import new1Pz from '@/public/images/new1Pz.jpg'
import new2Pz from '@/public/images/new2Pz.jpg'
import new3Pz from '@/public/images/new3Pz.jpg'
import new4Pz from '@/public/images/new4Pz.jpg'


interface IOurWorksItem {
    id: string,
    title: string,
    img: StaticImageData,
    video:string,
}
const OurWorksSection = () => {
    const t = useTranslations('OurWorksSection')
    const our_works_data: IOurWorksItem[] = [
        {
            id: '1',
            title: t('items.8'),
            img: new1Pz,
            video: 'https://www.youtube.com/shorts/9NOAz43_Rsg'
        },

        {
            id: '2',
            title: t('items.8'),
            img: new2Pz,
            video: 'https://www.youtube.com/shorts/sqWdXbwThco'
        },

        {
            id: '3',
            title: t('items.8'),
            img: new3Pz,
            video: 'https://www.youtube.com/shorts/E1htxl4Z5sU'
        },

        {
            id: '4',
            title: t('items.8'),
            img: new4Pz,
            video: 'https://www.youtube.com/shorts/ntOosb2wuXA'
        },
        {
            id: '5',
            title: t('items.0'),
            img: PZS3_img,
            video: 'https://www.youtube.com/watch?v=px_KGl8500Y'
        },

        {
            id: '6',
            title: t('items.1'),
            img: PZ9_img,
            video: 'https://www.youtube.com/watch?v=lUzoVbEifyI&t=17s'
        },

        {
            id: '7',
            title: t('items.2'),
            img: PZ14_img,
            video: 'https://www.youtube.com/watch?v=qIpvQ2NfKG4'
        },

        {
            id: '8',
            title: t('items.3'),
            img: PZ20_img,
            video: 'https://www.youtube.com/watch?v=2h6m9jsOMKg'
        },

        {
            id: '9',
            title: t('items.4'),
            img: PZ17_img,
            video: 'https://www.youtube.com/watch?v=fLCiFFd-lwY'
        },

        {
            id: '10',
            title:t('items.5'),
            img: PZ14_img,
            video: 'https://www.youtube.com/watch?v=jUjcHnsi_lM'
        },

        {
            id: '11',
            title: t('items.6'),
            img: PZ9_img,
            video: 'https://www.youtube.com/shorts/CyAOfjen7rw'
        },

        {
            id: '12',
            title: t('items.7'),
            img: PZ21_img,
            video: 'https://www.youtube.com/shorts/AdPDWTufDOI'
        },

        // {
        //     id: '8',
        //     title: t('items.7'),
        //     img: Pz3Img,
        //     video: '/videos/example.mp4'
        // }
    ]
    return (
        <div className='our_works_section pt-[50px] flex flex-col gap-[50px] justify-center items-center'>
            <div className="container flex flex-col gap-[50px] justify-center items-center">
                <div className='flex items-center justify-center gap-3'>
                    <LineIcon width={27} height={2} color='#5939F5' />
                    <h2 className='text-[24px] font_color font-normal arm_Hmks_Bebas_Neue leading-[28.8px]'>{t('title')}</h2>
                    <LineIcon width={27} height={2} color='#5939F5' />
                </div>
            </div>

            <div style={{ backgroundImage: `url(${ourWorksBackground.src})` }} className='bg-cover bg-center bg-no-repeat px-[50px] max-sm:px-[10px] py-[70px] w-full'>
                <div className="container w-full flex flex-wrap justify-center gap-[20px] items-start">
                    {
                        our_works_data.map((work) => (
                            <div key={work.id} className='flex flex-col gap-[10px] w-[300px] justify-center rounded overflow-hidden'>
                                <div className='w-full h-[212px]'>
                                    <VideoComponent path={work.video} thumb={work.img.src} />
                                </div>
                                <p className='text-white font-normal text-[16px] leading-[24px] freeSans'>{work.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OurWorksSection