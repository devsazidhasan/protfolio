'use client';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-32 bg-gray-900 px-6 md:px-12">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto bg-gray-800/60 backdrop-blur-md p-10 md:p-14 rounded-2xl border border-gray-700 shadow-2xl"
            >
                <h2 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    About Me
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    I'm a <span className="text-white font-semibold">self-taught developer</span> with a deep interest in creating beautiful, responsive, and functional digital products. My journey started with curiosity, and has since evolved into a mission to build tools that make people’s lives easier.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    I specialize in modern technologies like <span className="text-purple-400 font-medium">React</span>, <span className="text-blue-400 font-medium">Next.js</span>, and <span className="text-cyan-400 font-medium">Tailwind CSS</span>. I love writing clean, maintainable code and bringing designs to life through thoughtful animations and interactions.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-10">
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-3">🧰 Tools & Technologies</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            <li>JavaScript / TypeScript</li>
                            <li>Next.js, React, Node.js</li>
                            <li>Tailwind CSS, Framer Motion</li>
                            <li>Git & GitHub</li>
                            <li>Firebase, MongoDB (Basic)</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-3">🎯 Goals</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            <li>Contribute to open-source projects</li>
                            <li>Build scalable full-stack web apps</li>
                            <li>Improve UI/UX design skills</li>
                            <li>Grow as a developer through continuous learning</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10">
                    <h3 className="text-xl font-semibold text-white mb-3">💡 Outside of Tech</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        When I’m not coding, I enjoy reading about emerging tech trends, watching developer vlogs, and occasionally gaming or exploring design inspirations on platforms like Dribbble and Behance.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
