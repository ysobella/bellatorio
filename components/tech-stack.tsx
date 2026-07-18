import { Database, Code, Server, Smartphone, BarChart, Cloud, Wrench } from "lucide-react"
import TechCarousel from "./tech-carousel"

const techCategories = [
  {
    name: "Product & Project Management",
    icon: <Code className="h-6 w-6 text-accent-pink" />,
    technologies: ["Jira", "Notion", "Figma", "Google Analytics", "Trello", "Agile/Scrum"],
  },
  {
    name: "Web Development",
    icon: <Code className="h-6 w-6 text-accent-pink" />,
    technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend & Systems",
    icon: <Server className="h-6 w-6 text-accent-pink" />,
    technologies: ["Python", "Java", "C", "C++", "C#", "Go (Golang)", "Ruby", "Assembly"],
  },
  {
    name: "Mobile Development",
    icon: <Smartphone className="h-6 w-6 text-accent-pink" />,
    technologies: ["Kotlin", "Flutter"],
  },
  {
    name: "Data Science & AI",
    icon: <BarChart className="h-6 w-6 text-accent-pink" />,
    technologies: ["Numpy", "Pandas", "OpenCV"],
  },
  {
    name: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6 text-accent-pink" />,
    technologies: ["AWS", "Docker", "Git", "Postman"],
  },
  {
    name: "Databases",
    icon: <Database className="h-6 w-6 text-accent-pink" />,
    technologies: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    name: "Tools",
    icon: <Wrench className="h-6 w-6 text-accent-pink" />,
    technologies: ["VS Code", "Visual Studio", "Android Studio", "JetBrains", "Figma"],
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-4 md:px-6 lg:px-8 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-mono font-bold mb-12 text-accent-pink">// tech stack</h2>

      {/* Tech Logo Carousel */}
      <TechCarousel />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techCategories.map((category) => (
          <div
            key={category.name}
            className="bg-card-bg p-6 rounded-2xl hover:translate-y-[-5px] transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10"
          >
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold text-zinc-100">{category.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-[#262146] text-zinc-300 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
