// app/api/revalidate-sitemap/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

/**
 * POST /api/revalidate-sitemap
 * 
 * Обновляет sitemap.xml при изменении продуктов
 * Вызывается из Laravel бэкенда через Job
 */
export async function POST(request: NextRequest) {
    try {
        // 1. Проверяем авторизацию (токен из .env)
        const authHeader = request.headers.get('authorization')
        const token = authHeader?.replace('Bearer ', '')

        if (token !== process.env.REVALIDATE_TOKEN) {
            console.warn('[Sitemap] Unauthorized attempt:', {
                time: new Date().toISOString()
            })

            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            )
        }

        // 2. Получаем данные из запроса (опционально)
        const body = await request.json().catch(() => ({}))
        const { triggeredBy } = body

        // 3. Ревалидируем sitemap
        revalidatePath('/sitemap.xml')

        // 4. Логируем успех
        console.log('[Sitemap] Revalidated successfully', {
            triggeredBy: triggeredBy || 'unknown',
            time: new Date().toISOString()
        })

        // 5. Возвращаем успешный ответ
        return NextResponse.json({
            success: true,
            revalidated: true,
            timestamp: new Date().toISOString(),
            triggeredBy: triggeredBy || null
        })

    } catch (error) {
        // Логируем ошибку
        console.error('[Sitemap] Revalidation error:', error)

        return NextResponse.json(
            {
                error: 'Internal server error',
                message: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        )
    }
}

/**
 * GET - для проверки что endpoint работает
 */
export async function GET() {
    return NextResponse.json({
        status: 'ok',
        endpoint: 'POST /api/revalidate-sitemap',
        description: 'Use POST to revalidate sitemap.xml'
    })
}