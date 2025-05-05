"use client"
import { useFont } from "@/hooks/use-font"
import { Shuffle } from "lucide-react"

export function FontSwitcher() {
  const { font, cycleFont } = useFont()

  return (
    <div
      onClick={cycleFont}
      className="flex items-center text-lightest/80 hover:text-lightest cursor-pointer transition-colors"
    >
      <Shuffle className="h-3 w-3 mr-1" />
      <span className="text-xs">Random</span>
    </div>
  )
}
