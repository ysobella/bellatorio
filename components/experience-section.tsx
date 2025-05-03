"use client"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

// Experience Data
const experiences = [
  {
    company: "BoxCrib",
    position: "Co-Founder",
    date: "Feb 2025 - Present",
    description: [
      "Led platform development from concept to launch, overseeing UI/UX, tech stack selection, and product-market fit.",
      "Acquired 120+ suppliers and Php15,000 worth of sales within 1 month, driving marketplace liquidity and engagement.",
    ],
  },
  {
    company: "Giants Collective",
    position: "Philippine Delegate / Founding Fellow",
    date: "Sep 2024",
    description: [
      "1 of the 3 students that represented the Philippines in the Emerging Giants Summit 2024, partnered with Stanford University ASES.",
      "Learned and received mentorship from professionals from different companies, such as Google, YouTube, Canva, Netflix, Uber, Blackbird, and Y-Combinator.",
    ],
  },
  {
    company: "Elinnov Technologies, Inc.",
    position: "Software Engineering Intern",
    date: "May 2024 - Aug 2024",
    description: [
      "Optimized large language models (LLMs) using domain-specific data, improving the accuracy of AI-generated sustainability reports for corporate clients by 35%.",
    ],
  },
  {
    company: "Computer Studies Government (CSG)",
    position: "Executive, Human Resources Committee",
    date: "Jan 2024 - Jul 2024",
    description: [
      "Facilitated diverse personal and holistic development programs for nearly 100 CSG executives, significantly enhancing their growth and improvement.",
      "Spearheaded the planning and execution of 2 large-scale organizational events, with a total attendance of over 150 participants.",
    ],
  },
  {
    company: "Clash of the Brains 2023",
    position: "Associate Committee Head, Programs Committee",
    date: "Feb 2023 - Oct 2023",
    description: [
      "Spearheaded the organization of the quiz bee and programming competitions, enhancing the event content, resulting in a successful intercollegiate competition that engaged over 10 teams from various top universities in the Philippines.",
    ],
  },
  {
    company: "La Salle Computer Society (LSCS)",
    position: "Associate Vice President, Academics Committee",
    date: "Sep 2022 - Aug 2023",
    description: [
      "Coordinated various organization's events, including webinars, group studies, and a thesis showcase, engaging members in academic excellence and intellectual growth initiatives.",
      "Received regognition as an outstanding officer.",
    ],
  },
]

// Competitions Data
const competitions = [
  {
    title: "Maya Big3 Startup Showdown",
    year: "2025",
    position: "1st Runner-Up",
    description: "Competed against 30 startups from the top universities in the Philippines, launching a fully functional platform from the ground up — overseeing design, development, and market validation.",
    image: "/images/competitions/maya.jpg",
  },
  {
    title: "Emerging Giants Summit - Sydney",
    year: "2024",
    position: "Philippine Delegate",
    description: "Collaborated with a 4-member international team to develop Aeromedics — a drone-powered delivery system designed to provide rapid-response treatment for students experiencing anaphylactic shocks.",
    image: "/images/competitions/EGS_aeromedics.jpg",
  },
  {
    title: "Blue Hacks | Computer Society of the Ateneo",
    year: "2023",
    position: "2nd Runner-Up",
    description: "Collaborated with a 5-member team to develop \"F.A.R.M.\", an app designed to empower farmers, businessmen, and consumers by offering online courses, real-time price statistics, and an online selling platform, enhancing economic growth and improving the quality of life in the agricultural sector.",
    image: "/images/competitions/bh.jpg",
  },
  {
    title: "Samsung Create Ideathon",
    year: "2023",
    position: "Participant",
    description: "Engaged in an ideathon with a group of 4, proposing \"HAPAG\", an application designed to assist users in tracking their macros, receiving exercise tips, and accessing online medical consultations, tailored to their body type, aiming to enhance personal health and wellness.",
    image: "/images/competitions/hapag.jpg",
  },
]

// Certifications Data
const certifications = [
  {
    title: "Python for Data Science, AI, and Development",
    organization: "IBM",
    date: "2024",
    image: "/images/certifications/certPython.png",
  },
  {
    title: "Agile Project Management",
    organization: "Google",
    date: "2024",
    image: "/images/certifications/certAgile.png",
  },
  {
    title: "Introduction to GenAI Specialization",
    organization: "Google Cloud",
    date: "2024",
    image: "/images/certifications/certGenAILearningPath.png",
  },
  {
    title: "Data Analytics",
    organization: "LinkedIn Learning",
    date: "2024",
    image: "/images/certifications/certDataAnalytics.png",
  },
  {
    title: "Introduction to Generative AI",
    organization: "Google Cloud",
    date: "2024",
    image: "/images/certifications/certIntroGenAI.png",
  },
  {
    title: "Introduction to LLMs",
    organization: "Google Cloud",
    date: "2024",
    image: "/images/certifications/certIntroLLMs.png",
  },
  {
    title: "Introduction to Responsible AI",
    organization: "Google Cloud",
    date: "2024",
    image: "/images/certifications/certIntroResponsibleAI.png",
  },
  {
    title: "Applying AI Principles",
    organization: "Google Cloud",
    date: "2024",
    image: "/images/certifications/certAIPrin.png",
  },
  {
    title: "Jose Rizal First Honors",
    organization: "DLSU",
    date: "2024",
    image: "/images/certifications/certdl.png",
  },
  {
    title: "Cloud Foundations",
    organization: "Great Learning",
    date: "2023",
    image: "/images/certifications/certcloud.jpg",
  },
  {
    title: "Go Programming Language",
    organization: "Sololearn",
    date: "2023",
    image: "/images/certifications/certgo.png",
  },
  {
    title: "Kotlin Programming Language",
    organization: "Sololearn",
    date: "2023",
    image: "/images/certifications/certkotlin.png",
  },
  {
    title: "R Programming Language",
    organization: "Sololearn",
    date: "2023",
    image: "/images/certifications/certr.png",
  },
  {
    title: "Ruby Programming Language",
    organization: "Sololearn",
    date: "2023",
    image: "/images/certifications/certruby.png",
  },
]

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("experience")

  return (
    <section id="experience" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-mono font-bold mb-12 text-accent-pink">// awards & experiences</h2>

        <div className="mb-8 border-b border-[#1f1a3a]">
          <div className="flex flex-wrap -mb-px">
            {["experience", "competitions", "certifications"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "inline-block py-3 px-3 font-medium text-sm capitalize border-b-2 transition-colors",
                  activeTab === tab
                    ? "border-accent-pink text-accent-pink"
                    : "border-transparent text-zinc-400 hover:text-zinc-300 hover:border-[#1f1a3a]",
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "experience" && (
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-card-bg p-6 rounded-2xl hover:translate-y-[-5px] transition-all duration-300 hover:shadow-lg hover:shadow-accent-pink/10"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-100">{exp.position}</h3>
                    <p className="text-accent-pink">{exp.company}</p>
                  </div>
                  <span className="text-zinc-500 text-sm mt-2 md:mt-0 font-mono">{exp.date}</span>
                </div>
                <ul className="space-y-2 text-zinc-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent-pink mr-2">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === "competitions" && (
          <div className="grid grid-cols-2 gap-6">
            {competitions.map((comp, index) => (
              <div
                key={index}
                className="group bg-card-bg rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-accent-pink/20 transition-all duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image src={comp.image || "/placeholder.svg"} alt={comp.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131127] via-[#131127]/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-accent-pink text-sm">
                      {comp.year} • {comp.position}
                    </p>
                    <h3 className="text-xl font-semibold text-zinc-100">{comp.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-zinc-400 text-sm">{comp.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "certifications" && (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-card-bg rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-accent-pink/20 transition-all duration-300 hover:translate-y-[-5px]"
              >
                <div className="relative h-48 w-full">
                  <Image src={cert.image || "/placeholder.svg"} alt={cert.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131127] via-[#131127]/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-3">
                    <p className="text-accent-pink text-xs font-medium">
                      {cert.organization} • {cert.date}
                    </p>
                    <h3 className="text-sm font-semibold text-zinc-100">{cert.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
