'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function LangUpdater() {
    const pathname = usePathname()

    useEffect(() => {
        // Determine language based on route
        const lang = pathname.startsWith('/en') ? 'en' : 'fr'
        document.documentElement.lang = lang
    }, [pathname])

    return null
}
