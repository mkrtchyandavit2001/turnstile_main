// app/components/Slug/ClientSlugUpdater.tsx
// 'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// interface ClientSlugUpdaterProps {
//     shouldUpdate: boolean;
//     newUrl: string;
// }

// export default function ClientSlugUpdater({
//     shouldUpdate,
//     newUrl
// }: ClientSlugUpdaterProps) {
//     const router = useRouter();

//     useEffect(() => {
//         if (shouldUpdate) {
//             // Плавно меняем URL без перезагрузки
//             router.replace(newUrl, { scroll: false });
//         }
//     }, [shouldUpdate, newUrl, router]);

//     return null;
// }


// app/components/ClientSlugUpdater.tsx
'use client';

import { useEffect } from 'react';

interface ClientSlugUpdaterProps {
    currentPath: string;
    correctPath: string;
}

export default function ClientSlugUpdater({
    currentPath,
    correctPath
}: ClientSlugUpdaterProps) {
    useEffect(() => {
        // Проверяем, нужно ли обновлять URL
        if (currentPath !== correctPath) {
            // Меняем URL без перезагрузки страницы
            window.history.replaceState(
                { ...window.history.state },
                '',
                correctPath
            );

            console.log('URL updated:', correctPath);
        }
    }, [currentPath, correctPath]);

    return null; // Этот компонент ничего не рендерит
}