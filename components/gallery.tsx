import Image from "next/image"

type MemoryItem = {
  id: number
  title: string
  description: string
  imageUrl: string
  date: string
}

type MemberItem = {
  id: number
  name: string
  role: string
  bio: string
  imageUrl: string
}

type GalleryProps = {
  items: MemoryItem[] | MemberItem[]
  type: "memories" | "members"
}

export function Gallery({ items, type }: GalleryProps) {
  if (type === "memories") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(items as MemoryItem[]).map((item) => (
          <div key={item.id} className="bg-darker rounded-lg overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={item.imageUrl || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <p className="text-xs text-lightest">{item.title}</p>
              <p className="text-xs text-medium mt-1">{item.date}</p>
              <p className="mt-2 text-xs text-lightest/80">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {(items as MemberItem[]).map((item) => (
        <div key={item.id} className="bg-darker rounded-lg overflow-hidden">
          <div className="relative h-64 w-full">
            <Image src={item.imageUrl || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
          </div>
          <div className="p-4">
            <p className="text-xs text-lightest">{item.name}</p>
            <p className="text-xs text-medium mt-1">{item.role}</p>
            <p className="mt-2 text-xs text-lightest/80">{item.bio}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
