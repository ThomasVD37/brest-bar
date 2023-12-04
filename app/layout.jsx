import { Montserrat } from 'next/font/google'
import './globals.css'
import { Providers } from '@/lib/providers'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
    title: 'Brest Bar',
    description: 'Votre guide des bars à Brest',
}

export default function RootLayout({ children }) {
    return (
        <Providers>
            <html lang="fr">
                <head>
                    <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css' rel='stylesheet' />
                </head>
                <body className={montserrat.className}>{children}</body>
            </html>
        </Providers>
    )
}
