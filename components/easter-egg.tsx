import Image from "next/image"

export default function EasterEgg() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-8 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
      <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-pink-400 mb-3">
        <Image src="/images/bernic.png" alt="Bernic the cat" fill className="object-cover" />
      </div>
      <p className="text-sm text-zinc-400 italic text-center">
        *This is Bernic, my assistant dev. She criticizes everything that's pushed to prod.
      </p>
    </div>
  )
}
