// app/components/ProductTabs/ProductTabs.tsx
"use client";

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FaFileAlt, FaImages, FaVideo } from 'react-icons/fa';
import { MdDescription, MdSettings } from 'react-icons/md';
import Image from 'next/image';

// Определяем тип для delivery вместо any
interface DeliveryInfo {
    text?: string;
    details?: string;
    [key: string]: unknown;
}

interface ImageData {
    url: string;
    alt?: string;
    title?: string;
}

interface VideoData {
    url: string;
    title?: string;
    description?: string;
    thumbnail?: string;
}

interface DocumentData {
    url: string;
    title?: string;
    size?: string;
}

// Удаляем productName из интерфейса, если он не используется
interface TabProps {
    data: {
        description: string;
        specifications?: string;
        gallery: ImageData[];
        videos: VideoData[];
        documents: DocumentData[];
        delivery: DeliveryInfo | null;
    };
    // productName?: string; // ← удалите эту строку
}

// Удаляем productName из параметров
const ProductTabs = ({ data }: TabProps) => {
    const t = useTranslations('ProductTabs');
    const [activeTab, setActiveTab] = useState('description');

    // Функция для получения alt для изображений
    const getImageAlt = (image: ImageData, index: number): string => {
        return image.alt || `${t('image')} ${index + 1}`;
    };

    // Функция для получения title для изображений
    const getImageTitle = (image: ImageData): string | undefined => {
        return image.title || image.alt || undefined;
    };

    // Функция для получения title для видео
    const getVideoTitle = (video: VideoData, index: number): string => {
        return video.title || `${t('video')} ${index + 1}`;
    };

    const tabs = [
        {
            id: 'description',
            label: t('description'),
            icon: <MdDescription />,
            content: data.description && (
                <div
                    className="bg-gray-50 p-6 rounded-lg"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                />
            ),
            visible: !!data.description
        },
        {
            id: 'specifications',
            label: t('specifications'),
            icon: <MdSettings />,
            content: data.specifications && (
                <div
                    className="bg-gray-50 p-6 rounded-lg"
                    dangerouslySetInnerHTML={{ __html: data.specifications }}
                />
            ),
            visible: !!data.specifications
        },
        {
            id: 'gallery',
            label: t('gallery'),
            icon: <FaImages />,
            content: data.gallery.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {data.gallery.map((image, index) => (
                        <div key={index} className="rounded-lg overflow-hidden group">
                            <Image
                                src={image.url}
                                alt={getImageAlt(image, index)}
                                title={getImageTitle(image)}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                                onClick={() => window.open(image.url, '_blank')}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    ))}
                </div>
            ),
            visible: data.gallery.length > 0
        },
        {
            id: 'videos',
            label: t('videos'),
            icon: <FaVideo />,
            content: data.videos.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.videos.map((video, index) => {

                        const isYouTube =
                            video.url.includes('youtube.com') ||
                            video.url.includes('youtu.be');

                        const getYoutubeId = (url: string) => {
                            const regExp =
                                /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
                            const match = url.match(regExp);
                            return match ? match[1] : null;
                        };

                        return (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="relative pt-[56.25%]">

                                    {isYouTube ? (
                                        <iframe
                                            // src={`https://www.youtube.com/embed/${getYoutubeId(video.url)}`}
                                            src={`https://www.youtube.com/embed/${getYoutubeId(video.url)}?autoplay=1&mute=1`}
                                            className="absolute top-0 left-0 w-full h-full"
                                            allowFullScreen
                                            title={getVideoTitle(video, index)}
                                            
                                        />
                                    ) : (
                                        <video
                                            src={video.url}
                                            controls
                                            className="absolute top-0 left-0 w-full h-full object-cover"
                                            title={getVideoTitle(video, index)}
                                            poster={video.thumbnail}
                                            preload="metadata"
                                            autoPlay
                                        />
                                    )}

                                </div>

                                {(video.title || video.description) && (
                                    <div className="p-4">
                                        {video.title && (
                                            <h4 className="font-medium text-gray-800 mb-1">
                                                {video.title}
                                            </h4>
                                        )}
                                        {video.description && (
                                            <p className="text-sm text-gray-600">
                                                {video.description}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            ),
            visible: data.videos.length > 0
        },
        
        {
            id: 'documents',
            label: t('documents'),
            icon: <FaFileAlt />,
            content: data.documents.length > 0 && (
                <div className="space-y-4">
                    {data.documents.map((doc, index) => {
                        const fileExtension = doc.url.split('.').pop()?.toUpperCase() || 'FILE';
                        const fileName = doc.title || `${t('document')} ${index + 1}`;

                        return (
                            <a
                                key={index}
                                href={doc.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                                title={t('download') + ': ' + fileName}
                                download
                            >
                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg">
                                    <FaFileAlt className="text-blue-600 text-xl" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-gray-800 truncate">
                                        {fileName}
                                    </p>
                                    <div className="flex items-center gap-3 text-sm text-gray-500">
                                        <span>{fileExtension}</span>
                                        {doc.size && <span>• {doc.size}</span>}
                                    </div>
                                </div>
                                <span className="text-blue-600 group-hover:text-blue-800 font-medium">
                                    {t('download')}
                                </span>
                            </a>
                        );
                    })}
                </div>
            ),
            visible: data.documents.length > 0
        }
    ];

    // Добавляем вкладку для delivery, если она есть
    if (data.delivery) {
        tabs.push({
            id: 'delivery',
            label: t('delivery'),
            icon: <MdDescription />,
            content: (
                <div className="bg-gray-50 p-6 rounded-lg">
                    {typeof data.delivery === 'string' ? (
                        <div dangerouslySetInnerHTML={{ __html: data.delivery }} />
                    ) : (
                        <div>
                            {data.delivery.text && <p>{data.delivery.text}</p>}
                            {data.delivery.details && <p className="mt-2 text-sm text-gray-600">{data.delivery.details}</p>}
                        </div>
                    )}
                </div>
            ),
            visible: true
        });
    }

    const visibleTabs = tabs.filter(tab => tab.visible);

    if (visibleTabs.length === 0) {
        return null;
    }

    return (
        <div className="product-tabs">
            {/* Таб-кнопки */}
            <div className="flex flex-wrap border-b border-gray-200 mb-6">
                {visibleTabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-6 py-3 font-medium text-lg transition-colors whitespace-nowrap ${activeTab === tab.id
                            ? 'border-b-2 border-blue-600 text-blue-600'
                            : 'text-gray-600 hover:text-gray-900'
                            }`}
                        aria-label={t('showTab', { tab: tab.label })}
                        type="button"
                        role="tab"
                        aria-selected={activeTab === tab.id}
                    >
                        {tab.icon}
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Контент активного таба */}
            <div className="tab-content mt-6" aria-live="polite">
                {visibleTabs.find(tab => tab.id === activeTab)?.content || (
                    <p className="text-gray-500">{t('noContent')}</p>
                )}
            </div>
        </div>
    );
};

export default ProductTabs;