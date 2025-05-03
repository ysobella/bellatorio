import Image from "next/image"
import { Download, Mail, Github, Linkedin, Instagram } from "lucide-react"
import TechStack from "@/components/tech-stack"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Navbar from "@/components/navbar"
import TypingAnimation from "@/components/typing-animation"
// import EasterEgg from "@/components/easter-egg"
import ConstellationBackground from "@/components/constellation-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-blue text-zinc-300">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-32 min-h-screen flex items-center">
        {/* Constellation Background */}
        <div className="absolute inset-0 w-full overflow-hidden">
          <ConstellationBackground />
        </div>
        <div className="relative z-10 px-4 md:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-zinc-100">hi, bella here.</h1>
              <div className="mb-6">
                <TypingAnimation phrases={["Founder", "Developer", "Designer", "Dean's Lister", "Student Leader"]} />
              </div>
              <p className="text-zinc-400 mb-8 max-w-xl">
                With a passion for software development and innovation, I thrive on transforming concepts into tangible solutions that push the boundaries of technology.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href="/Resume - Ysobella Torio.pdf"
                  download
                  className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-accent-pink text-accent-pink hover:bg-accent-pink/10 transition-colors font-medium"
                >
                  <Download size={18} />
                  <span>Resume</span>
                </a>
                <a
                  href="mailto:ysobellatorio@gmail.com"
                  className="flex items-center gap-2 px-6 py-3 text-zinc-300 hover:text-accent-pink transition-colors font-medium"
                >
                  <Mail size={18} />
                  <span>Say Hi</span>
                </a>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/ysobella"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-zinc-400 hover:text-accent-pink transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ysobella-torio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-zinc-400 hover:text-accent-pink transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/y.so.bella/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-zinc-400 hover:text-accent-pink transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-2 relative h-80 lg:h-96 w-full max-w-md mx-auto lg:max-w-none">
              <div className="h-full w-full relative rounded-2xl overflow-hidden border border-card-bg">
                <Image src="\images\atlassian_bella.png" alt="Bella" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>

        {/* Constellation Background */}
        {/* <ConstellationBackground /> */}
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-mono font-bold mb-8 text-accent-pink">// about me</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-zinc-300 leading-relaxed">
              Hi! I'm Ysobella Torio, a 4th-year Computer Science undergraduate at 
              <span className="text-cyan-400"> De La Salle University, Manila</span>, majoring in Software Technology. 
              My passion lies at the intersection of innovation and impact.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Currently, I’m a research member at the 
              <span className="text-purple-400"> Center for Computational Imaging & Visual Innovations (CIVI)</span>, 
              where I explore how deep learning can be applied to solve real-world problems through visual data. 
              I’m also the co-founder of 
              <span className="text-yellow-400"> BoxCrib</span>, 
              a digital marketplace that bridges the gap between contractors and construction suppliers — 
              helping streamline procurement and bring more transparency to the industry.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Whether it’s through research or entrepreneurship, I love building solutions that are meaningful, technically sound, and human-centered.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Easter Egg */}
      {/* <EasterEgg /> */}

      {/* Footer */}
      <footer className="py-6 px-4 md:px-6 lg:px-8 border-t border-[#1f1a3a] bg-dark-blue">
        <div className="max-w-5xl mx-auto text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Ysobella Torio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
