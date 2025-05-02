import { Database, Code, Server, Smartphone, BarChart, Cloud, Wrench } from "lucide-react"

const techCategories = [
  {
    name: "Web Development",
    icon: <Code className="h-6 w-6 text-pink-400" />,
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend & Systems",
    icon: <Server className="h-6 w-6 text-pink-400" />,
    technologies: ["Python", "Java", "C", "C++", "C#", "Go (Golang)", "Ruby", "Assembly"],
  },
  {
    name: "Mobile Development",
    icon: <Smartphone className="h-6 w-6 text-pink-400" />,
    technologies: ["Kotlin", "Flutter"],
  },
  {
    name: "Data Science & AI",
    icon: <BarChart className="h-6 w-6 text-pink-400" />,
    technologies: ["Numpy", "Pandas", "OpenCV"],
  },
  {
    name: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6 text-pink-400" />,
    technologies: ["AWS", "Docker", "Git", "Postman"],
  },
  {
    name: "Databases",
    icon: <Database className="h-6 w-6 text-pink-400" />,
    technologies: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    name: "Tools",
    icon: <Wrench className="h-6 w-6 text-pink-400" />,
    technologies: ["VS Code", "Visual Studio", "Android Studio", "JetBrains", "Figma"],
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-4 md:px-6 lg:px-8 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-mono font-bold mb-12 text-pink-400">// tech stack</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techCategories.map((category) => (
          <div
            key={category.name}
            className="bg-zinc-800/50 p-6 rounded-2xl hover:translate-y-[-5px] transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10"
          >
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold text-zinc-100">{category.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-zinc-700/70 text-zinc-300 rounded-full text-sm">
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
