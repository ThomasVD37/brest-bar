import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/lib/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Brest Bar',
    description: 'Votre guide des bars à Brest',
}

export default function RootLayout({ children }) {
    return (
        <Providers>
            <html lang="fr">
                <body className={inter.className}>{children}</body>
            </html>
        </Providers>
    )
}
