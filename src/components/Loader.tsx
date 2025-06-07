'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageLoader() {
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, [pathname]);

    if (!loading) return null;

    return (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black">
            <div className="border-4 border-white border-t-transparent rounded-full w-10 h-10 animate-spin" />
        </div>
    );
}