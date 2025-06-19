'use client';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Student Management System',
        description: 'Role-based access web app built with Flask & SQLAlchemy.',
        image: '/IMG_20231210_175716.jpg',
        link: '#',
    },
    {
        title: 'Portfolio Website',
        description: 'A sleek personal portfolio built with Next.js and Tailwind.',
        image: '/protfolio.jpeg',
        link: 'https://sazidhasan.netlify.app/',
    },
    {
        title: 'Medicine Inventory System',
        description: 'Inventory tracking web app for pharmacies with Next.js.',
        image: '/medicine.jpeg',
        link: 'https://bubtmedicine.netlify.app/',
    },
    {
        title: 'Weather App',
        description: 'Real-time weather forecast app using OpenWeatherMap API.',
        image: '/images/weather-app.jpg',
        link: '#',
    },
    {
        title: 'Local harvest',
        description: 'Simple task management app using React and localStorage.',
        image: '/images/task-tracker.jpg',
        link: 'https://bdlocalharvest.netlify.app/',
    },
    {
        title: 'Notepad',
        description: 'RESTful blog API built with Django and DRF.',
        image: '/images/blog-api.jpg',
        link: '#',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-gray-900 px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto"
            >
                <h2 className="text-4xl font-bold text-white mb-4 text-center">Projects</h2>
                <p className="text-gray-400 text-center mb-12 text-lg">Some things I've built recently:</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.a
                            key={idx}
                            href={project.link}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-indigo-500/50 transition duration-300 flex flex-col"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-5 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2 hover:text-indigo-400">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="mt-4">
                  <span className="text-indigo-400 text-sm font-medium hover:underline">
                    View Project →
                  </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}