'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export { }; // 🔹 нужно, чтобы TypeScript воспринял это как модуль

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

export default function Analytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url = pathname + (searchParams.toString() ? '?' + searchParams.toString() : '');
        if (typeof window.gtag === 'function') {
            window.gtag('config', 'G-XGYTB9SK6C', {
                page_path: url,
            });
        }
    }, [pathname, searchParams]);

    return null;
}
