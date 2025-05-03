import Link from "next/link"

export default function Logo() {
  return (
    <Link href="#hero" className="flex items-center">
      {/* <div className="h-10 w-10 border-2 border-accent-pink text-accent-pink flex items-center justify-center font-mono font-bold text-lg rounded-full">
        B
      </div> */}
      <span className="text-xl font-bold text-accent-pink">
        Bella <span className="text-zinc-100">Torio</span>
      </span>
    </Link>
  )
}
