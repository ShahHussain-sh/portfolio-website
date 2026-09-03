import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-base text-ink selection:bg-amber">
      <Navbar />
      <main>
        <Hero />
        <Stack />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
