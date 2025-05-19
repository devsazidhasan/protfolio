'use client';
import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { FaLinkedin, FaFacebookSquare } from 'react-icons/fa';

export default function Header() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('#hero'); // Home is default active

    const links = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleLinkClick = (href: string) => {
        setActive(href);
        setOpen(false);
    };

    return (
        <header className="fixed w-full z-50 bg-gray-900 text-white shadow">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 relative rounded-full overflow-hidden">
                        <Image
                            src="/IMG_20231210_175716.jpg"
                            alt="Sazid"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <a
                        href="https://github.com/devsazidhasan"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h1 className="text-xl font-bold cursor-pointer hover:text-blue-500 transition">
                            devsazidhasan
                        </h1>
                    </a>
                </div>

                {/* Centered Nav */}
                <nav className="hidden md:flex space-x-6 mx-auto">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => handleLinkClick(link.href)}
                            className={`transition duration-300 ${
                                active === link.href ? 'text-indigo-400' : 'hover:text-indigo-400'
                            }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Right Social Icons */}
                <div className="hidden md:flex space-x-4">
                    <a href="https://www.linkedin.com/in/devsazidhasan/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-xl hover:text-blue-500 transition" />
                    </a>
                    <a href="https://www.facebook.com/devsazidhasan/" target="_blank" rel="noopener noreferrer">
                        <FaFacebookSquare className="text-xl hover:text-blue-600 transition" />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {open ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Fullscreen Nav */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center space-y-5 z-40"
                    >
                        {links.map((link) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                onClick={() => handleLinkClick(link.href)}
                                className={`text-xl py-2 px-6 rounded transition ${
                                    active === link.href
                                        ? 'text-indigo-400'
                                        : 'text-white hover:bg-indigo-600'
                                }`}
                                whileHover={{ scale: 1.05 }}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <div className="flex space-x-6 pt-6">
                            <a href="https://www.linkedin.com/in/devsazidhasan" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-2xl hover:text-blue-500 transition" />
                            </a>
                            <a href="https://www.facebook.com/devsazidhasan" target="_blank" rel="noopener noreferrer">
                                <FaFacebookSquare className="text-2xl hover:text-blue-600 transition" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
