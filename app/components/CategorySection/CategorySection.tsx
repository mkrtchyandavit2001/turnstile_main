"use client"
import React from 'react'
import categorySecuritySystemsImg from '@/public/images/category_section_securitySystemsImg.jpg'
import categoryTurnstileImg from '@/public/images/category_section_turnstileImg.png'
import { RightArrowIcon } from '@/app/icons/LeftArrowIcon';
import { useTranslations } from 'next-intl';
import ButtonParrentComponent from '../ButtonParrentComponent/ButtonParrentComponent';

interface ICategoryItem {
    id: string,
    title: string,
    description: string,
    path: string,
    bg: string,
}
const CategorySection = () => {    
    const t = useTranslations("CategorySection")

    

    const categoriesData: ICategoryItem[] = [
        {
            id: '1',
            title: t("items.0.title"),
            description: t("items.0.description"),
            path: `/security-systems`,
            bg: categorySecuritySystemsImg.src,
        },

        {
            id: '2',
            title: t("items.1.title"),
            description: t("items.1.description"),
            path: `/turnstile`,
            bg: categoryTurnstileImg.src,
        },
    ]
    // return (
    //     <div className='category_section pt-[50px]'>
    //         {
    //             categoriesData.map((category: ICategoryItem) => (
    //                 <div key={category.id} className='category_item relative h-[648px] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${category.bg})` }}>
    //                     <div className={`container flex h-full items-center ${+category.id % 2 !== 0 ? 'justify-end' : 'justify-start'} pl-[30px]`}>
    //                         <div className='max-w-[300px] flex flex-col gap-[30px] z-10'>
    //                             <h3 className={`font-semibold text-[24px] leading-[32px] arm_Hmks_Bebas_Neue text-white` }>{category.title}</h3>
    //                             <p className={`font-normal text-[22px] leading-[32px] freeSans text-white`}>{category.description}</p>
                                

    //                             {
    //                               category.id !== "1" &&   <ButtonParrentComponent customClass="category_btn_hover"  btnText={t('btn')} bg="transparent" color="white" border={false} size="16" icon={<RightArrowIcon width={24} height={24}  color="white"/>}/>
    //                             }
    //                         </div>
    //                         <div className='w-full h-full absolute top-0 left-0 bg-[#0000008f] z-0'></div>
    //                     </div>
    //                 </div>
    //             ))
    //         }
    //     </div>
    // )


    return (
        <div className="category_section flex flex-col md:flex-row gap-5">
            {categoriesData.map((category) => (
                <div
                    key={category.id}
                    className="category_item relative w-full md:w-1/2 h-[648px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${category.bg})` }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60"></div>

                    {/* Контент - ограниченный блок с текстом */}
                    <div className="relative z-10 h-full flex flex-col justify-center">
                        <div className="max-w-md p-6 text-white">
                            <h3 className="text-2xl font-semibold">{category.title}</h3>
                            <p className="text-lg mt-2">{category.description}</p>
                            {category.id !== "1" && (
                                <div className="mt-4">
                                    <ButtonParrentComponent
                                        customClass="category_btn_hover"
                                        btnText={t('btn')}
                                        bg="transparent"
                                        color="white"
                                        border={false}
                                        size="16"
                                        icon={<RightArrowIcon width={24} height={24} color="white" />}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CategorySection