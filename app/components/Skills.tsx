'use client';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const skillsData = {
    Frontend: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 60 },
        { name: 'React', level: 50 },
        { name: 'Next.js', level: 85 },
    ],
    Styling: [
        { name: 'CSS', level: 90 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Bootstrap', level: 80 },
    ],
    Languages: [
        { name: 'Python', level: 80 },
        { name: 'C', level: 75 },
        { name: 'C++', level: 75 },
        { name: 'Java Script', level: 70 },
    ],
};

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-gray-900 px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                <h2 className="text-5xl font-extrabold text-white mb-8 text-center tracking-wide">
                    Skills
                </h2>
                <p className="text-gray-400 mb-16 text-xl max-w-3xl mx-auto text-center">
                    Here are the technologies and tools I excel at, along with my proficiency levels.
                </p>

                <div className="flex flex-col md:flex-row md:justify-between gap-12">
                    {Object.entries(skillsData).map(([category, skills]) => (
                        <div
                            key={category}
                            className="flex-1 bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-indigo-500/50 transition-shadow"
                        >
                            <h3
                                className={`text-3xl font-semibold mb-6 ${
                                    category === 'Frontend'
                                        ? 'text-indigo-400'
                                        : category === 'Styling'
                                            ? 'text-pink-400'
                                            : 'text-teal-400'
                                }`}
                            >
                                {category}
                            </h3>
                            <div className="space-y-5">
                                {skills.map(({ name, level }) => (
                                    <div key={name}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-white font-medium">{name}</span>
                                            <span className="text-gray-300">{level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-4">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${level}%` }}
                                                transition={{ duration: 1.5, ease: 'easeOut' }}
                                                className={`h-4 rounded-full ${
                                                    category === 'Frontend'
                                                        ? 'bg-indigo-500'
                                                        : category === 'Styling'
                                                            ? 'bg-pink-500'
                                                            : 'bg-teal-500'
                                                }`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center text-gray-400 flex justify-center gap-4 flex-wrap">
                    <CheckCircleIcon className="w-6 h-6 text-indigo-500 animate-pulse" />
                    <p className="max-w-xl text-lg">
                        Constantly learning and improving my skills to build better, faster, and more beautiful apps.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
