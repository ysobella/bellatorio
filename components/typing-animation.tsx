"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetween?: number
}

export default function TypingAnimation({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
}: TypingAnimationProps) {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [delta, setDelta] = useState(typingSpeed)

  useEffect(() => {
    const ticker = setTimeout(() => {
      tick()
    }, delta)

    return () => clearTimeout(ticker)
  }, [text, isDeleting, phraseIndex])

  const tick = () => {
    const currentPhrase = phrases[phraseIndex]
    const updatedText = isDeleting
      ? currentPhrase.substring(0, text.length - 1)
      : currentPhrase.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta(deletingSpeed)
    }

    if (!isDeleting && updatedText === currentPhrase) {
      setIsDeleting(true)
      setDelta(delayBetween)
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false)
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
      setDelta(typingSpeed)
    }
  }

  return (
    <span className="text-xl md:text-2xl font-mono font-medium text-accent-pink">
      I am a{" "}
      <span className="relative font-mono">
        {text}
        <span className="absolute right-[-4px] top-0 h-full w-[2px] bg-accent-pink animate-blink"></span>
      </span>
    </span>
  )
}
