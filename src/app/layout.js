import './globals.css'
import { Inter } from 'next/font/google'
import React from "react";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap'
})

export const metadata = {
    metadataBase: new URL('http://localhost:3000/'),
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en-US'
        },
    },
    description: 'FTerCeiraIdade'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={inter.className}>
            <body>
                {children}
            </body>
        </html>
    )
}


