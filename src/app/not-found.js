// Import global styles and fonts

import Link from 'next/link';


export const metadata = {
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist.',
}






export default function NotFound() {
    return (

        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1>404 - Page Not Found</h1>
            <p>This page does not exist.</p>
            <Link
                href="/"
                className='text-red-700 underline hover:bg-red-950'
            >
                Go back to Home
            </Link>

        </div>

    )
}