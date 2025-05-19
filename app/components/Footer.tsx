'use client';
import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Floating Arrow Icon */}
            <button
                onClick={scrollToTop}
                className="cursor-pointer fixed bottom-5 right-5 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg z-50 transition"
                aria-label="Scroll to top"
            >
                <FaArrowUp className="text-xl" />
            </button>

            {/* Footer Bottom Section */}
            <footer className="bg-gray-950 text-white py-6 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Sazid. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
}
