// app/[locale]/(routes)/catalog-new/CatalogClientWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import CatalogItemNew from "@/app/components/CatalogItem/CatalogItemNew";

type Product = {
  id: number;
  code: string;
  slug: string;
  category_slug: string;
  image: string;
  name?: string;
};

type Category = {
  id: number;
  name: string;
  slug: string;
};

export default function CatalogClientWrapper() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        // ??????????? ????? ??? Nginx Rewrites proxy-? ?????
        const [prodRes, catRes] = await Promise.all([
          fetch("/backend/api/products"),
          fetch("/backend/api/categories")
        ]);

        if (prodRes.ok && catRes.ok) {
          const prodData = await prodRes.json();
          const catData = await catRes.json();
          
          setProducts(prodData.data || []);
          setCategories(catData.data || []);
        }
      } catch (error) {
        console.error("Backend fetch error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-96 w-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5939F5]"></div>
        <span className="ml-3 mt-4 text-lg font-medium text-gray-600">????????? ???????? ??...</span>
      </div>
    );
  }

  return <CatalogItemNew products={products} categories={categories} />;
}