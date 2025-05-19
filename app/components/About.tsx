'use client';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-950 px-6">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-semibold text-white mb-4">About Me</h2>
                <p className="text-gray-400 leading-7">
                    I'm a self-taught developer with a passion for building beautiful and functional web apps. I enjoy working with modern technologies like React, Next.js, and Tailwind CSS.
                </p>
            </motion.div>
        </section>
    );
}
