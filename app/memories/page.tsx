import { Gallery } from "@/components/gallery"

// In a real application, this would come from a database or CMS
const memories = [
  {
    id: 1,
    title: "Summer Gathering 2023",
    description: "Our annual summer gathering brought together residents and friends.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    date: "July 2023",
  },
  {
    id: 2,
    title: "Workshop Series",
    description: "A series of creative workshops hosted at Capi House.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    date: "May 2023",
  },
  {
    id: 3,
    title: "Community Dinner",
    description: "Weekly community dinners are a cornerstone of life at Capi.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    date: "April 2023",
  },
  {
    id: 4,
    title: "Art Exhibition",
    description: "Showcasing works from our resident artists.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    date: "March 2023",
  },
  {
    id: 5,
    title: "Garden Project",
    description: "Our community garden project in full bloom.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    date: "June 2023",
  },
  {
    id: 6,
    title: "Music Night",
    description: "Monthly music nights bring together performers from our community.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    date: "February 2023",
  },
]

export default function MemoriesPage() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-xs text-lightest">Memories</p>
        <p className="mt-2 text-xs text-lightest/90">
          A collection of moments and experiences from life at Capi House.
        </p>
      </section>

      <Gallery items={memories} type="memories" />
    </div>
  )
}
