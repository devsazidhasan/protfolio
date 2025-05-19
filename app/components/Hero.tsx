'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const phrases = [
    "A passionate developer crafting modern web apps.",
    "An Engineer & Developer.",
    "Always learning, always building."
];

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 3000); // Change text every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center max-w-2xl"
            >
                {/* Circular Image on Top */}
                <div className="mx-auto w-32 h-32 relative mb-6 rounded-full overflow-hidden border-4 border-white">
                    <Image
                        src="/IMG_20231210_175716.jpg"
                        alt="Sazid"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <h1 className="text-5xl font-extrabold text-white mb-6">Hi, I’m Sazid</h1>

                <div className="h-16 mb-8 relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6 }}
                            className="text-xl text-gray-300 px-4"
                        >
                            {phrases[index]}
                        </motion.p>
                    </AnimatePresence>
                </div>

                {/* Additional tagline */}
                <p className="text-lg text-gray-400 mb-6">
                    From creative coding to real-world solutions, I love turning ideas into interactive digital experiences.
                    Whether you’re a fellow tech enthusiast, a potential collaborator, or just curious — dive in and let’s build something meaningful together!
                </p>

                {/* Buttons */}
                <div className="flex justify-center space-x-4 mb-6">
                    <a
                        href="#projects"
                        className="px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300 font-medium"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border border-indigo-400 text-indigo-400 rounded-full hover:bg-indigo-400 hover:text-black transition duration-300 font-medium"
                    >
                        Contact Me
                    </a>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="https://github.com/devsazidhasan" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-2xl text-white hover:text-gray-400 transition" />
                    </a>
                    <a href="https://www.linkedin.com/in/devsazidhasan/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-2xl text-white hover:text-blue-400 transition" />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
