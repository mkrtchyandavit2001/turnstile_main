'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { filterProps } from 'framer-motion';

type Product = {
  id: number;
  code: string;
  slug: string;
  category_slug: string;
  image: string;
};

type Category = {
  id: number;
  name: string;
  slug: string;
};


export default function CatalogItemNew({
  products,
  categories
}: {
    products: Product[];
    categories: Category[];
}) {
  const t = useTranslations('');
  const router = useRouter();
  const [lang, setLang] = useState('am');
  const [code, setCode] = useState('');
  const [category_id, setCategory] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cookieLang =
      document.cookie
        .split('; ')
        .find(row => row.startsWith('lang='))
        ?.split('=')[1] || 'am';

    setLang(cookieLang);
  }, []);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  

  const applyFilter = () => {
    const query = new URLSearchParams();

    if (code) query.append('code', code);
    if (category_id) query.append('category_id', category_id);

    router.push(`/${lang}/catalog?${query.toString()}`);
  };

  return (
    <div className="container pb-6 flex flex-col gap-7 items-end">  

      <div className="flex flex-col sm:flex-col md:flex-row gap-4 
                      w-full md:justify-end mb-6 px-4 md:px-10">
        <input
          type="text"
          placeholder={t('filter.searchText')}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="border p-2 rounded w-full md:w-[360px]"
        />

        {/* <select
          value={category_id}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded w-full md:w-[360px]"
        >
          <option value="">{t('filter.allCategories')}</option>

          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select> */}

        <div ref={dropdownRef} className="relative w-full md:w-[360px]">

          <button
            onClick={() => setIsOpen(prev => !prev)}
            className="border px-4 py-2 rounded font_color flex items-center justify-between w-full"
          >
            {category_id
              ? categories.find(c => String(c.id) === category_id)?.name
              : t('filter.allCategories')}

            <svg
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}              
              width="12"
              height="6"
              viewBox="0 0 12 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.928 0.818248L5.92798 5.18188L0.927979 0.818248"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute w-full bg-white rounded-md shadow-lg z-50 mt-1 max-h-[250px] overflow-auto">

              <button
                className="font_color block px-4 py-2 hover:bg-gray-100 w-full text-left"
                onClick={() => {
                  setCategory('');
                  setIsOpen(false);
                }}
              >
                {t('filter.allCategories')}
              </button>

              {categories.map(cat => (
                <button
                  key={cat.id}
                  className="font_color block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => {
                    setCategory(String(cat.id));
                    setIsOpen(false);
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          )}

        </div>

        <button
          onClick={applyFilter}
          className="bg-[#5939F5] text-white px-4 py-2 rounded w-full md:w-auto"
        >
          {t('filter.buttonFilter')}
        </button>
      </div>       
      
      
      <div className="flex flex-wrap justify-center w-full gap-[20px]">
        {products.map(item => (
          <div
            key={item.id}
            className="w-[280px] flex flex-col items-center gap-[10px] bg-white rounded border-gray-100 border-2 cursor-pointer"
          >
            {/* IMAGE */}
            <div
              className="w-full h-[233px] shadow-sm rounded relative overflow-hidden"
              onClick={() =>
                // router.push(`/${lang}/catalog/${item.category_slug}/${item.slug}/${item.code}`)
                window.open(
                          `/${lang}/catalog/${item.category_slug}/${item.slug}/${item.code}`,
                  "_blank"
                )
              }
              title={item.code}
            >
              <Image
                src={item.image}
                alt={item.code}
                fill
                className="w-full h-full object-cover rounded absolute top-0 left-0 transition-opacity duration-1000 opacity-100 z-10"
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col items-center gap-[10px] w-full justify-center p-[20px]">
              <h3 className="freeSans font_color font-normal text-[16px] leading-[19.2px] text-center">
                {item.code}
              </h3>
              <h4 className="text-center w-full overflow-hidden whitespace-nowrap text-ellipsis">{item.name}</h4>

              <ButtonComponent
                name={t('OurProductsSection.order_btn')}
                bg="transparent"
                color="#5939F5"
                size="14px"
                border="1px solid #5939F5"
                width="100%"
                py="9px"
                px="0"
                order={item.code}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
