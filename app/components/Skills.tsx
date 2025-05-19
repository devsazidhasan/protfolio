'use client';
import { motion } from 'framer-motion';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Python', 'C'];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-gray-900 px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-semibold text-white mb-6">Skills</h2>
                <div className="flex flex-wrap gap-4">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
                        >
              {skill}
            </span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
