"use client"

import { useEffect } from "react"

export function TabTitleManager() {
  useEffect(() => {
    const originalTitle = document.title

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "no come back :<"
      } else {
        document.title = originalTitle
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  return null
}
