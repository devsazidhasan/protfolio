'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'; // Optional icons
import React, { ChangeEvent, FormEvent } from 'react';

export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Thanks for your message!');
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="max-w-3xl mx-auto bg-gray-850 bg-opacity-70 backdrop-blur-md rounded-xl shadow-lg p-10"
            >
                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-5xl font-extrabold text-white mb-8 text-center tracking-wide"
                >
                    Get in Touch
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="text-center text-gray-300 text-lg mb-12"
                >
                    Have a question or want to work together? Send me a message!
                </motion.p>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="space-y-8"
                >
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-gray-300 mb-2 font-semibold">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                            className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 shadow-sm
                focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-shadow"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-gray-300 mb-2 font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="you@example.com"
                            className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 shadow-sm
                focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-shadow"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-gray-300 mb-2 font-semibold">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            required
                            placeholder="Write your message here..."
                            className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 shadow-sm
                resize-none focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-shadow"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-500 text-white font-bold
              rounded-lg shadow-lg hover:scale-105 hover:shadow-indigo-700 transition transform duration-300"
                    >
                        Send Message
                    </button>
                </motion.form>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.6 }}
                    className="mt-14 text-gray-400 text-center space-y-3"
                >
                    <p className="flex items-center justify-center gap-3 text-indigo-400">
                        <FiMail className="inline-block" />{' '}
                        <a href="mailto:sazid3993@gmail.com" className="underline hover:text-white transition">
                            sazid3993@gmail.com
                        </a>
                    </p>
                    <p className="flex items-center justify-center gap-3">
                        <FiPhone className="inline-block" /> +880 01313-884913
                    </p>
                    <p className="flex items-center justify-center gap-3">
                        <FiMapPin className="inline-block" /> Dhaka, Bangladesh
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
