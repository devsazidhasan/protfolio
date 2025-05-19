'use client';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Student Management System',
        description: 'Role-based access web app built with Flask & SQLAlchemy.',
        link: '#',
    },
    {
        title: 'Portfolio Website',
        description: 'A sleek personal portfolio built with Next.js and Tailwind.',
        link: '#',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-gray-950 px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-semibold text-white mb-6">Projects</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map((project, idx) => (
                        <a
                            key={idx}
                            href={project.link}
                            className="block p-6 bg-gray-800 rounded hover:bg-indigo-600 transition duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-gray-300">{project.description}</p>
                        </a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
