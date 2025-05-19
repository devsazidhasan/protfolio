import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FooterSection from './components/Footer';


export default function Home() {
    return (
        <main className="bg-gray-900 text-white">
            <Header />
            <div className="pt-20">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <FooterSection />
            </div>
        </main>
    );
}
