import Link from "next/link"

export default function Logo() {
  return (
    <Link href="#hero" className="flex items-center">
      <div className="h-10 w-10 border-2 border-pink-500 text-pink-400 flex items-center justify-center font-mono font-bold text-lg rounded-full">
        B
      </div>
    </Link>
  )
}
