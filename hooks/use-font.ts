"use client"

import { useEffect } from "react"
import { useLocalStorage } from "./use-local-storage"

type FontFamily = "inter" | "poppins" | "roboto-mono" | "dm-sans" | "lora"

const fonts: FontFamily[] = ["inter", "poppins", "roboto-mono", "dm-sans", "lora"]

export function useFont() {
  const [font, setFont] = useLocalStorage<FontFamily>("font-preference", "inter")

  useEffect(() => {
    document.body.dataset.font = font
    document.documentElement.style.setProperty("--font-family", `var(--font-${font})`)
    document.body.className = document.body.className.replace(/font-(inter|poppins|roboto-mono|dm-sans|lora)/g, "")
    document.body.classList.add(`font-${font}`)
  }, [font])

  const cycleFont = () => {
    const currentIndex = fonts.indexOf(font)
    const nextIndex = (currentIndex + 1) % fonts.length
    setFont(fonts[nextIndex])
  }

  return { font, setFont, cycleFont }
}
