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
                            Sazid Hasan
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
                    className="md:hidden z-50"
                    onClick={() => setOpen(prev => !prev)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpen(prev => !prev);
                        }}
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
                    <>
                        {/* Background Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black z-40"
                            onClick={() => setOpen(false)}
                        />

                        {/* Side Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="fixed top-0 right-0 h-full w-4/5 sm:w-1/3 bg-white/10 backdrop-blur-xl border-l border-white/20 shadow-2xl z-50 flex flex-col p-6"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setOpen(false)}
                                className="self-end text-white hover:text-pink-400 transition transform hover:rotate-90"
                            >
                                ✕
                            </button>

                            {/* Menu Links */}
                            <div className="mt-8 space-y-6">
                                {links.map((link, index) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => handleLinkClick(link.href)}
                                        className={`block text-lg font-medium tracking-wide px-4 py-2 rounded-lg transition-all duration-300 ${
                                            active === link.href
                                                ? "bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg"
                                                : "text-white hover:text-pink-400"
                                        }`}
                                        whileHover={{ scale: 1.05 }}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.08 }}
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="mt-6 border-t border-white/20"></div>

                            {/* Social Links */}
                            <div className="mt-auto flex space-x-6 pt-6">
                                <a
                                    href="https://www.linkedin.com/in/devsazidhasan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-blue-400 transition transform hover:scale-110"
                                >
                                    <FaLinkedin className="text-2xl" />
                                </a>
                                <a
                                    href="https://www.facebook.com/devsazidhasan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-blue-500 transition transform hover:scale-110"
                                >
                                    <FaFacebookSquare className="text-2xl" />
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
