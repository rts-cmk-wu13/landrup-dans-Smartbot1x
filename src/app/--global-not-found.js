// Import global styles and fonts
import Link from 'next/link'
import './globals.css'





export const metadata = {
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist.',
}

export default function GlobalNotFound() {
    return (
        <html lang="en" className="bg-background">
            <body className="flex flex-col items-center justify-center min-h-screen">
                <h1>404 - Page Not Found</h1>
                <p>This page does not exist.</p>
                <Link
                    href="/"
                    className='text-sky-700 underline hover:bg-sky-950'
                >
                    Go back to Home
                </Link>
            </body>
        </html>
    )
}