import Link from "next/link"

export function Navigation() {
  return (
    <nav className="flex flex-wrap gap-6 text-xs text-lightest/80">
      <Link href="/" className="hover:text-lightest transition-colors">
        Home
      </Link>
      <Link href="/memories" className="hover:text-lightest transition-colors">
        Memories
      </Link>
      <Link href="/members" className="hover:text-lightest transition-colors">
        Members
      </Link>
      <Link href="/fund" className="hover:text-lightest transition-colors">
        Fund
      </Link>
    </nav>
  )
}
