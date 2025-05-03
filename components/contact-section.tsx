"use client"

import { useState } from "react"
import { Mail, Github, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"

export default function ContactSection() {
  const [isHovered, setIsHovered] = useState(false)
  const [isEmailCopied, setIsEmailCopied] = useState(false)
  const email = "ysobellatorio@gmail.com"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    setIsEmailCopied(true)
    setTimeout(() => setIsEmailCopied(false), 2000)
  }
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-blue via-[#1a1635] to-[#2a1b4d]">
        {/* Animated gradient circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow-delay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-mono font-bold mb-4 text-accent-pink">// contact</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-100 relative inline-block">
          Get in touch, say hi.
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-pink to-transparent"></span>
        </h3>

        <p className="text-zinc-400 mb-12 max-w-2xl mx-auto text-lg">
          Feel free to send me an email! I'm always open to new opportunities and collaborations.
        </p>

        {/* Email with hover effect */}
        <div
          className="relative inline-block group cursor-pointer mb-12"
          onClick={copyToClipboard}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="text-2xl md:text-3xl font-medium text-[#4ecdc4] transition-all duration-300 group-hover:text-accent-pink">
            {email}
          </div>

          <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#4ecdc4] origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-hover:bg-accent-pink"></div>

          <div
            className={`absolute -top-10 left-1/2 transform -translate-x-1/2 bg-card-bg px-3 py-1 rounded text-sm transition-opacity duration-300 ${isEmailCopied ? "opacity-100" : "opacity-0"}`}
          >
            Copied!
          </div>

          {/* <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm">Click to copy</span>
          </div> */}
        </div>

        {/* Social Icons with animated hover */}
        <div className="flex justify-center gap-8 mb-16">
          <a
            href="https://github.com/ysobella"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 bg-card-bg rounded-full hover:bg-[#1f1a3a] transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6 text-zinc-400 group-hover:text-accent-pink transition-colors duration-300" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
              GitHub
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/ysobella-torio/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 bg-card-bg rounded-full hover:bg-[#1f1a3a] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 text-zinc-400 group-hover:text-accent-pink transition-colors duration-300" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
              LinkedIn
            </span>
          </a>
          <a
            href="https://www.instagram.com/y.so.bella/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 bg-card-bg rounded-full hover:bg-[#1f1a3a] transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6 text-zinc-400 group-hover:text-accent-pink transition-colors duration-300" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
              Instagram
            </span>
          </a>
          <a
            href="mailto:ysobellatorio@gmail.com"
            className="group relative p-4 bg-card-bg rounded-full hover:bg-[#1f1a3a] transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="h-6 w-6 text-zinc-400 group-hover:text-accent-pink transition-colors duration-300" />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
              Email
            </span>
          </a>
        </div>
        {/* Bernic the cat */}
        <div className="mt-16 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity duration-300">
          <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-accent-pink mb-3 ring-4 ring-accent-pink/20">
            <Image
              src="/images/bernic.png"
              alt="Bernic the cat"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-zinc-400 italic text-center">
            *This is Bernic, my assistant dev. She criticizes everything that's pushed to prod.
          </p>
        </div>
      </div>
    </section>
  )
}
