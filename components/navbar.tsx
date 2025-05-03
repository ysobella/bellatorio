"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Logo from "@/components/logo"

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-dark-blue/90 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-5">
            {navLinks.map((link, index) => (
              <a key={link.name} href={link.href} className="text-zinc-400 hover:text-accent-pink transition-colors text-sm py-1 px-2">
                <span className="text-accent-pink font-mono">{`0${index + 1}.`}</span>
                {` ${link.name}`}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-zinc-300 hover:text-accent-pink" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-card-bg/90 rounded-b-xl">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-zinc-300 hover:bg-zinc-700/50 hover:text-accent-pink rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-accent-pink font-mono">{`0${index + 1}. `}</span>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
