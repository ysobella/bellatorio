import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "BoxCrib",
    description:
      "A construction supply marketplace platform that reduces the procurement process time by 80%.",
    techStack: ["Next.js", "Supabase", "ShadCN", "Vercel"],
    demo: "https://boxcrib.vercel.app/",
    image: "/images/projects/bc.png",
  },
  {
    title: "Daily",
    description:
      "An AI-powered mobile application that automates daily timeblocking. Users input their main tasks, and the app generates a personalized schedule with detailed subtasks, optimized time slots, and smart suggestions.",
    techStack: ["Flutter", "Firebase", "Gemini", "Google Calendar"],
    demo: "https://www.canva.com/design/DAGYB3L7i0I/hXAdEDjGIJ1G_s09G1_RnA/view?utm_content=DAGYB3L7i0I&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc5175fd2b9",
    image: "/images/projects/daily.png",
  },
  {
    title: "Aeromedics",
    description:
      "A drone-powered delivery system designed to provide rapid-response treatment for students experiencing anaphylactic shocks.",
    techStack: ["Figma"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "/images/projects/aero.png",
  },
  {
    title: "BantayBuddy",
    description:
      "A social web application that lets pet owners connect with each other, share pet care tips, and find local pet products.",
    techStack: ["Next.js", "Tailwind CSS", "Firebase", "Vercel"],
    github: "https://github.com",
    image: "/images/projects/bb.png",
  },
  {
    title: "PasaHero",
    description:
      "A mobile application that helps users find the best public transportation routes in Metro Manila, Philippines.",
    techStack: ["Figma"],
    demo: "https://example.com",
    image: "/images/projects/pasahero.png",
  },
  {
    title: "SpikeZone",
    description:
      "An online forum for VALORANT players to connect, share strategies, and find teammates.",
    techStack: ["Javascript", "MongoDB", "HTML", "CSS"],
    github: "https://github.com",
    image: "/images/projects/spikezone.png",
  },
  {
    title: "Threeville Farm",
    description:
      "An OOP farming game that allows players to buy seeds, prepare land, plant crops, and harvest them.",
    techStack: ["Java"],
    github: "https://github.com",
    image: "/images/projects/ville.png",
  },
  {
    title: "Image Quilting",
    description:
      "A program that synthesizes a large image from smaller patches, allowing for seamless texture generation.",
    techStack: ["Python", "OpenCV", "Matplotlib"],
    github: "https://github.com",
    image: "/images/projects/quilting.png",
  },
  {
    title: "Mazebot",
    description:
      "A mazebot that uses the A* search algorithm to find the shortest path in a maze.",
    techStack: ["Python"],
    github: "https://github.com",
    image: "/images/projects/mazebot.png",
  },
  {
    title: "Insurance Claim Prediction",
    description:
      "A machine learning model that utilizes Decision Trees and SVMs to analyze the likelihood of an insurance claim based on various factors.",
    techStack: ["Python"],
    github: "https://github.com",
    image: "/images/projects/insurance.png",
  },
  {
    title: "Diagnostic Chatbot",
    description:
      "A medical diagnostic chatbot specialized in infectious diseases.",
    techStack: ["Prolog"],
    github: "https://github.com",
    image: "/images/projects/chatbot.png",
  },
  {
    title: "Chutes and Ladders",
    description:
      "An ancient Indian board game similar to snakes and ladders. It can be played by 2-4 human players or against a pseudo-AI player.",
    techStack: ["C"],
    github: "https://github.com",
    image: "/images/projects/chutes.png",
  },
  {
    title: "Discrete Checkers",
    description:
      "A checkers game made with Discrete Structures.",
    techStack: ["C"],
    github: "https://github.com",
    image: "/images/projects/checkers.png",
  },
  {
    title: "Pokedex",
    description:
      "A Pokedex application that allows users to search for Pokémon and view their details.",
    techStack: ["C"],
    github: "https://github.com",
    image: "/images/projects/pokedex.png",
  },
  {
    title: "PH Tax Calculator",
    description:
      "A monthly tax calculator that computes the income tax, SSS, PhilHealth, and Pag-IBIG contributions based on the user's salary.",
    techStack: ["C"],
    github: "https://github.com",
    image: "/images/projects/tax.png",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 md:px-6 lg:px-8 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-mono font-bold mb-12 text-accent-pink">// projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-card-bg rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-accent-pink/20 transition-all duration-300 hover:translate-y-[-5px]"
          >
            <div className="relative h-48 w-full">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131127] via-[#131127]/70 to-transparent"></div>

              <div className="absolute top-4 right-4 flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1f1a3a]/80 p-2 rounded-full text-zinc-300 hover:text-accent-pink hover:bg-[#1f1a3a] transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1f1a3a]/80 p-2 rounded-full text-zinc-300 hover:text-accent-pink hover:bg-[#1f1a3a] transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-xl font-semibold text-zinc-100">{project.title}</h3>
              </div>
            </div>

            <div className="p-4">
              <p className="text-zinc-400 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-[#1f1a3a] text-zinc-300 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
