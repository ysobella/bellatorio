import { Mail, Github, Linkedin, Instagram } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-mono font-bold mb-4 text-accent-pink">// contact</h2>
        <h3 className="text-3xl font-semibold mb-4 text-zinc-100">Get in touch, say hi.</h3>
        <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
        Feel free to send me an email! I'm always open to new opportunities and collaborations.
        </p>

        <a
          href="mailto:ysobellatorio@gmail.com"
          className="text-xl md:text-2xl font-medium text-cyan-400 hover:underline transition-all"
        >
          ysobellatorio@gmail.com
        </a>

        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/ysobella"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-zinc-400 hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/ysobella-torio/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-zinc-400 hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/y.so.bella/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-zinc-400 hover:text-cyan-400 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href="mailto:ysobellatorio@gmail.com"
            className="p-3 text-zinc-400 hover:text-cyan-400 transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
