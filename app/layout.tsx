'use client'

import { AppProvider } from '@/providers'
import './globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <AppProvider>
                    {children}
                </AppProvider>
            </body>
        </html>
    )
}
