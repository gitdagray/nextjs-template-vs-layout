"use client"

import { usePathname } from "next/navigation"

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    return (
        <div className="animate-appear p-4">
            <pre className="inline-block bg-muted px-2 py-1 rounded-lg">{pathname}</pre>
            {children}
        </div>
    )
}