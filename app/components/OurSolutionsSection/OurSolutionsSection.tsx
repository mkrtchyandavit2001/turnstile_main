import { LineIcon } from '@/app/icons/LineIcon'
import React, { ReactNode } from 'react'
import ourSolutionBachgroundImg from '@/public/images/ourSolutionsSectionBacground.png'
import { ShlaqBawnScanIcon } from '@/app/icons/ShlaqBawnScanIcon'
import { CarScanIcon } from '@/app/icons/CarScanIcon'
import { FaceScanIcon } from '@/app/icons/FaceScanIcon'
import { EyeScanIcon } from '@/app/icons/EyeScanIcon'
import { useTranslations } from 'next-intl'

interface SolutionItem {
    id: string,
    title: string,
    icon: ReactNode,
    route: string,
    description: string,

}
const OurSolutionsSection = () => {
    const t = useTranslations("OurSolutionsSection")

    const solutions: SolutionItem[] = [
        {
            id: '1',
            title: t("itemTitles.0"),
            icon: <ShlaqBawnScanIcon />,
            route: '/',
            description: t("itemDescriptions.0"),
        },

        {
            id: '2',
            title: t("itemTitles.1"),
            icon: <CarScanIcon />,
            route: '/',
            description: t("itemDescriptions.1"),
        },

        {
            id: '3',
            title: t("itemTitles.2"),
            icon: <FaceScanIcon />,
            route: '/',
            description: t("itemDescriptions.2"),
        },

        {
            id: '4',
            title: t("itemTitles.3"),
            icon: <EyeScanIcon />,
            route: '/',
            description: t("itemDescriptions.3"),
        },

        {
            id: '5',
            title: t("itemTitles.4"),
            icon: <EyeScanIcon />,
            route: '/',
            description: t("itemDescriptions.4"),
        },

        {
            id: '6',
            title: t("itemTitles.5"),
            icon: <CarScanIcon />,
            route: '/',
            description: t("itemDescriptions.5"),
        },

        {
            id: '7',
            title: t("itemTitles.6"),
            icon: <FaceScanIcon />,
            route: '/',
            description: t("itemDescriptions.6"),
        },

        {
            id: '8',
            title: t("itemTitles.7"),
            icon: <EyeScanIcon />,
            route: '/',
            description: t("itemDescriptions.7"),
        },

    ]

    return (
        <div className='pb-[50px] flex flex-col gap-[50px]'>
            <div className="container">
                <div className="flex items-center justify-center gap-3">
                    <LineIcon width={27} height={2} color="#5939F5" />
                    <h2 className="text-[24px] font_color font-normal arm_Hmks_Bebas_Neue leading-[28.8px] uppercase">
                        {t("title")}
                    </h2>
                    <LineIcon width={27} height={2} color="#5939F5" />
                </div>
            </div>

            <div style={{ backgroundImage: `url(${ourSolutionBachgroundImg.src})` }} className='px-[50px] py-[70px] max-sm:px-[20px] bg-cover bg-no-repeat bg-center'>
                <div className="container flex flex-wrap gap-[20px] ">
                    {
                        solutions.map((solution) => (
                            <div key={solution.id} className='grow basis-72 bg-white p-[20px] rounded flex flex-col gap-[15px] items-center justify-between'>
                                <span>{solution.icon}</span>
                                <h3 className='text-[20px] font_color font-semibold freeSans leading-[24px] text-center'>{solution.title}</h3>
                                <p className='text-center font-normal freeSans text-[16px] leading-[24px] font_color'>{solution.description}</p>
                                {/* <Link href={solution.route} className='text-[16px] text-[#5939F5] font-normal freeSans leading-[24px] text-center uppercase hover:text-blue-700 flex items-center gap-1'>
                                    <span>{t("btn")}</span>
                                    <RightChvronIcon/> 
                                </Link> */}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OurSolutionsSection