import { Gallery } from "@/components/gallery"

// In a real application, this would come from a database or CMS
const members = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Artist & Designer",
    bio: "Alex creates digital art and illustrations that explore the intersection of technology and nature.",
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Jordan Taylor",
    role: "Software Engineer",
    bio: "Jordan builds tools that help creative communities collaborate more effectively.",
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Morgan Lee",
    role: "Writer & Poet",
    bio: "Morgan's work examines the human experience in the digital age.",
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Sam Rivera",
    role: "Musician & Producer",
    bio: "Sam creates experimental electronic music and hosts workshops on sound design.",
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Taylor Kim",
    role: "Filmmaker",
    bio: "Taylor documents community stories and creates short films exploring urban living.",
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Riley Johnson",
    role: "Community Manager",
    bio: "Riley coordinates house events and ensures Capi remains a vibrant, supportive community.",
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
]

export default function MembersPage() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-xs text-lightest">Our Members</p>
        <p className="mt-2 text-xs text-lightest/90">Meet the creative individuals who call Capi House home.</p>
      </section>

      <Gallery items={members} type="members" />
    </div>
  )
}
