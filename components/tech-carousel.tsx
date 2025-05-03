"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const techLogos = [
  { name: "HTML", logo: "/images/tech/html.png" },
  { name: "CSS", logo: "/images/tech/css.png" },
  { name: "JavaScript", logo: "/images/tech/js.png" },
  { name: "TypeScript", logo: "/images/tech/ts.png" },
  { name: "React", logo: "/images/tech/reactjs.png" },
  { name: "Next.js", logo: "/images/tech/nextjs.png" },
  { name: "Tailwind CSS", logo: "/images/tech/tailwindcss.png" },
  { name: "Python", logo: "/images/tech/python.png" },
  { name: "Java", logo: "/images/tech/java.png" },
  { name: "C", logo: "/images/tech/c.png" },
  { name: "C++", logo: "/images/tech/cpp.png" },
  { name: "C#", logo: "/images/tech/csharp.png" },
  { name: "Go", logo: "/images/tech/golang.png" },
  { name: "Ruby", logo: "/images/tech/ruby.png" },
  { name: "Assembly", logo: "/images/tech/asm.png" },
  { name: "Kotlin", logo: "/images/tech/kotlin.png" },
  { name: "Flutter", logo: "/images/tech/flutter.png" }, 
  { name: "NumPy", logo: "/images/tech/numpy.png" }, 
  { name: "Pandas", logo: "/images/tech/pandas.svg" }, 
  { name: "OpenCV", logo: "/images/tech/opencv.png" }, 
  { name: "AWS", logo: "/images/tech/aws.png" }, 
  { name: "Docker", logo: "/images/tech/docker.png" },
  { name: "Postman", logo: "/images/tech/postman.png" }, 
  { name: "Git", logo: "/images/tech/git.png" },
  { name: "MySQL", logo: "/images/tech/mysql.png" },
  { name: "MongoDB", logo: "/images/tech/mongodb.png" },
  { name: "Firebase", logo: "/images/tech/firebase.png" }, 
  { name: "VS Code", logo: "/images/tech/vscode.png" }, 
  { name: "Visual Studio", logo: "/images/tech/vstudio.png" }, 
  { name: "Android Studio", logo: "/images/tech/astudio.png" },
  { name: "JetBrains", logo: "/images/tech/jetbrains.png" },
  { name: "Figma", logo: "/images/tech/figma.png" }, 
]

export default function TechCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const scrollerInnerRef = useRef<HTMLDivElement>(null)
  const repeatedLogos = [...techLogos, ...techLogos] // Duplicate once for seamless loop

  useEffect(() => {
    if (!scrollerRef.current || !scrollerInnerRef.current) return

    // Clone the content for seamless scrolling
    const scrollerContent = Array.from(scrollerInnerRef.current.children)
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      scrollerInnerRef.current?.appendChild(duplicatedItem)
    })
  }, [])

  return (
    <div className="w-full overflow-hidden py-4 my-8">
      <div className="flex animate-tech-scroll w-[400%]">
        {repeatedLogos.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center mx-4 flex-shrink-0"
          >
            <div className="relative w-12 h-12 bg-[#1f1a3a] rounded-lg p-2 flex items-center justify-center">
              <Image
                src={tech.logo}
                alt={tech.name}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-xs text-zinc-400 mt-1">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
