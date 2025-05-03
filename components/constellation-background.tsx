"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseVx: number
  baseVy: number
}

export default function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)
  const mouseActiveRef = useRef<boolean>(false)

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const width = window.innerWidth
        const height = window.innerHeight * 1.2 // Make it a bit taller to cover the hero section
        setDimensions({ width, height })
        canvasRef.current.width = width
        canvasRef.current.height = height

        // Reinitialize particles when resizing
        initParticles()
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Initialize particles
  const initParticles = () => {
    if (!canvasRef.current) return

    const { width, height } = dimensions
    const particles: Particle[] = []
    const particleCount = Math.min(Math.floor((width * height) / 9000), 500) // Adjust density based on screen size

    for (let i = 0; i < particleCount; i++) {
      const baseVx = (Math.random() - 0.5) * 0.2
      const baseVy = (Math.random() - 0.5) * 0.2

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        // vx: (Math.random() - 0.5) * 0.5,
        // vy: (Math.random() - 0.5) * 0.5,
        vx: baseVx,
        vy: baseVy,
        baseVx: baseVx,
        baseVy: baseVy,
        radius: Math.random() * 2 + 1,
      })
    }

    particlesRef.current = particles
  }

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
        mouseActiveRef.current = true

        // Reset mouse active after a delay
        setTimeout(() => {
          mouseActiveRef.current = false
        }, 2000)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return

    // Initialize particles on first render
    if (particlesRef.current.length === 0) {
      initParticles()
    }

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      // Update and draw particles
      const particles = particlesRef.current

      // Draw connections
      ctx.beginPath()
      ctx.strokeStyle = "rgba(150, 217, 248, 0.15)"

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]

        // Connect to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))

          if (distance < 100) {
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
          }
        }

        // Connect to mouse if nearby and mouse is active
        if (mouseActiveRef.current) {
        const mouseDistance = Math.sqrt(Math.pow(p1.x - mousePosition.x, 2) + Math.pow(p1.y - mousePosition.y, 2))

        if (mouseDistance < 150) {
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(mousePosition.x, mousePosition.y)

          // Push particles away from mouse slightly
          const angle = Math.atan2(p1.y - mousePosition.y, p1.x - mousePosition.x)
          const pushStrength = (1 - mouseDistance / 150) * 0.5
          p1.vx += Math.cos(angle) * pushStrength
          p1.vy += Math.sin(angle) * pushStrength
        }
        }
      }

      ctx.stroke()

      // Draw particles
      for (const particle of particles) {
        // Add some random movement even when mouse is not active
        if (!mouseActiveRef.current) {
          // Slowly return to base velocity
          particle.vx = particle.vx * 0.98 + particle.baseVx * 0.02
          particle.vy = particle.vy * 0.98 + particle.baseVy * 0.02

          // Add small random movement
          particle.vx += (Math.random() - 0.5) * 0.01
          particle.vy += (Math.random() - 0.5) * 0.01
        }

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        // if (particle.x < 0 || particle.x > dimensions.width) particle.vx *= -1
        // if (particle.y < 0 || particle.y > dimensions.height) particle.vy *= -1
        if (particle.x < 0 || particle.x > dimensions.width) {
          particle.vx *= -1
          particle.baseVx *= -1
        }
        if (particle.y < 0 || particle.y > dimensions.height) {
          particle.vy *= -1
          particle.baseVy *= -1
        }

        // Dampen velocity
        particle.vx *= 0.99
        particle.vy *= 0.99

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(150, 217, 248, 0.7)"
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [dimensions, mousePosition])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" style={{ opacity: 0.6 }} />
}
