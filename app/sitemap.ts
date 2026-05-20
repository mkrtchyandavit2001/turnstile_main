// app/sitemap.ts
import { MetadataRoute } from "next"

const BASE_URL = "https://turniket.am"
const LOCALES = ["am", "ru", "en"] as const

// Статические страницы
const STATIC_PAGES = ["", "turnstile", "security-systems", "catalog", "crm-system", "contact-us"]

// Типы
type ProductTranslation = {
    category_slug: string
    slug: string
}

type Product = {
    code: string
    updated_at: string
    translations: Record<string, ProductTranslation>
}

/**
 * Получаем продукты из API
 */
async function getProducts(): Promise<Product[]> {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products-sitemap`, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
                Accept: "application/json",
            },
            next: { revalidate: 3600 }, // Кэшируем на час
        })

        if (!res.ok) {
            console.error(`[Sitemap] API error: ${res.status}`)
            return []
        }

        const data = await res.json()
        return data.data || data || []

    } catch (error) {
        console.error('[Sitemap] Failed to fetch products:', error)
        return [] // Возвращаем пустой массив, но не ломаем sitemap
    }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    console.log('[Sitemap] Generating...', new Date().toISOString())

    const pages: MetadataRoute.Sitemap = []
    const startTime = Date.now()

    // ---------- Статические страницы ----------
    for (const page of STATIC_PAGES) {
        for (const locale of LOCALES) {
            const path = page ? `/${page}` : ""
            pages.push({
                url: `${BASE_URL}/${locale}${path}`,
                lastModified: new Date(),
                changeFrequency: "monthly",
                priority: page === "" ? 1.0 : 0.8,
            })
        }
    }

    // ---------- Продукты ----------
    const products = await getProducts()

    for (const product of products) {
        for (const locale of LOCALES) {
            const translation = product.translations?.[locale]

            if (!translation?.category_slug || !translation?.slug) continue

            pages.push({
                url: `${BASE_URL}/${locale}/catalog/${translation.category_slug}/${translation.slug}/${product.code}`,
                lastModified: product.updated_at ? new Date(product.updated_at) : new Date(),
                changeFrequency: "weekly",
                priority: 0.9,
            })
        }
    }

    console.log(`[Sitemap] Generated ${pages.length} URLs in ${Date.now() - startTime}ms`)

    return pages
}

// ISR - обновлять каждый час (как запасной вариант)
export const revalidate = 3600