'use client'
import React, { useState } from 'react'
import adminScreen1 from '@/public/images/admin_screen1.png'
import adminScreen2 from '@/public/images/admin_screen2.png'
import adminScreen3 from '@/public/images/admin_screen3.png'
import adminScreen4 from '@/public/images/admin_screen4.png'
import adminScreen5 from '@/public/images/admin_screen5.png'
import adminScreen6 from '@/public/images/admin_screen6.png'
import { NextSlideIcon } from '@/app/icons/NextSlideIcon'
import { PrevSlideIcon } from '@/app/icons/PrevSlide'
import Image from 'next/image'

const AdminPanelScreenSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [slides] = useState([
        adminScreen1,
        adminScreen2,
        adminScreen3,
        adminScreen4,
        adminScreen5,
        adminScreen6
    ])

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
    }


    return (
        <div className='admin_panel_screen_slider w-full flex justify-center items-center px-[20px]'>
            <button onClick={prevSlide}>
                <PrevSlideIcon width={20} height={36} color={currentSlide === 0 ? "#A9A9A9" : "#0E0449"} />
            </button>
            {
                slides.map((slide, index) => (
                    <div key={index} className={index === currentSlide ? 'block' : 'hidden'}>
                        <Image
                            src={slide}
                            alt="admin screen"
                            width={1920} // Specify a width
                            height={438} // Specify a height
                            className='w-screen h-[438px] max-md:h-[300px] max-sm:h-[200px] object-contain'
                        />
                    </div>
                ))
            }

            <button onClick={nextSlide}>
                <NextSlideIcon width={20} height={36} color={currentSlide === slides.length - 1 ? "#A9A9A9" : "#0E0449"} />
            </button>
        </div>
    )
}

export default AdminPanelScreenSlider