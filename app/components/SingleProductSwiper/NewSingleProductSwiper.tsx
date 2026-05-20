// app/components/SingleProductSwiper/SingleProductSwiper.tsx
"use client";

import React, { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface ImageData {
    src: string;
    alt?: string; // уже на нужном языке
    title?: string;
}

interface SingleProductSwiperProps {
    images: ImageData[];
    productName?: string;
}

const SingleProductSwiper = ({ images, productName = '' }: SingleProductSwiperProps) => {
    const t = useTranslations('ProductGallery');
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Получаем префикс для миниатюр на текущем языке
    // Если переменная не используется, можно ее закомментировать или удалить
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const thumbnailPrefix = t('thumbnailPrefix');

    // Функция для получения alt с fallback
    const getImageAlt = (image: ImageData, index: number, isThumbnail: boolean = false): string => {
        if (image.alt) {
            return isThumbnail ? `${image.alt}` : image.alt;
        }

        // Fallback если alt нет
        const fallback = productName
            ? t('imageFallbackWithName', { name: productName, number: index + 1 })
            : t('imageFallback', { number: index + 1 });

        return isThumbnail ? `${fallback}` : fallback;
    };

    // Функция для получения title
    const getImageTitle = (image: ImageData): string | undefined => {
        if (image.title) return image.title;
        if (image.alt) return t('viewImage', { alt: image.alt });
        return undefined; // Не ставим title если совсем нет данных
    };

    if (!images || images.length === 0) {
        return (
            <div className="text-gray-500 text-sm">
                {t('noImages')}
            </div>
        );
    }

    const currentImage = images[currentIndex];

    return (
        <div className="single-product-swiper">
            {/* Основное изображение */}
            <div className="relative mb-4">
                <div className="overflow-hidden rounded-lg">
                    <Image
                        src={currentImage.src}
                        alt={getImageAlt(currentImage, currentIndex, false)}
                        title={getImageTitle(currentImage)}
                        width={800}
                        height={600}
                        className="w-full h-auto max-h-96 object-contain bg-gray-100"
                        style={{ objectFit: 'contain' }}
                    />
                </div>

                {/* Навигационные стрелки */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white p-0 rounded-full shadow-lg transition-colors duration-200"
                            aria-label={t('prevImage')}
                            type="button"
                        >
                            ←
                        </button>
                        <button
                            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white p-0 rounded-full shadow-lg transition-colors duration-200"
                            aria-label={t('nextImage')}
                            type="button"
                        >
                            →
                        </button>
                    </>
                )}

                {/* Индикаторы (точки) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2 h-2 rounded-full ${idx === currentIndex ? 'bg-white' : 'bg-white/50'} transition-colors duration-200`}
                            aria-label={t('showImage', { alt: t('image') + ' ' + (idx + 1) })}
                            type="button"
                        />
                    ))}
                </div>
            </div>

            {/* Миниатюры */}
            <div className="flex gap-2 overflow-x-auto py-2" ref={containerRef}>
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded border-2 ${currentIndex === index ? 'border-blue-500' : 'border-gray-200'} transition-colors duration-200`}
                        aria-label={t('showImage', { alt: image.alt || t('image') })}
                        aria-current={currentIndex === index ? "true" : "false"}
                        type="button"
                    >
                        <Image
                            src={image.src}
                            alt={getImageAlt(image, index, true)}
                            title={getImageTitle(image)}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover rounded"
                            style={{ objectFit: 'cover' }}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SingleProductSwiper;