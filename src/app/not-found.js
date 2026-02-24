import Link from 'next/link';
import { LucideAlertTriangle } from 'lucide-react';

export const metadata = {
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-secondary px-4">
            <LucideAlertTriangle size={48} className="mb-4 text-red-700" />
            <h1 className="text-3xl md:text-5xl font-bold mb-2">404 - Page Not Found</h1>
            <p className="text-lg md:text-xl mb-6 text-center">This page does not exist.</p>
            <Link
                href="/"
                className="text-red-700 underline hover:bg-red-950 rounded px-4 py-2 transition"
            >
                Go back to Home
            </Link>
        </div>
    );
}
