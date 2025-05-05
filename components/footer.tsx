import { Navigation } from "./navigation"
import { FontSwitcher } from "./font-switcher"

export function Footer() {
  return (
    <footer className="py-6 flex flex-row justify-between items-center">
      <Navigation />
      <FontSwitcher />
    </footer>
  )
}
