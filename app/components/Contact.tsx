'use client';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-900 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-semibold text-white mb-6">Contact</h2>
                <p className="text-gray-400 mb-4">Feel free to reach out via email:</p>
                <a
                    href="mailto:sazid@example.com"
                    className="text-indigo-400 underline hover:text-white transition"
                >
                    sazid@example.com
                </a>
            </motion.div>
        </section>
    );
}
