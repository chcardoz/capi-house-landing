import { MailingList } from "@/components/mailing-list"

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <p className="text-xs text-lightest">Welcome to Capi House</p>
        <div className="space-y-4">
          <p className="text-xs text-lightest/90">
            Capi is a community house dedicated to bringing together creative minds and fostering collaboration.
          </p>

          <p className="text-xs text-lightest/80">
            Our house serves as a hub for artists, technologists, and thinkers to live, work, and grow together. We
            believe in the power of community living to spark innovation and create meaningful connections.
          </p>

          <p className="text-xs text-lightest/80">
            Located in a vibrant neighborhood, Capi House provides both private and shared spaces designed to balance
            individual focus with collaborative energy. Our residents come from diverse backgrounds but share a common
            passion for creativity and community.
          </p>

          <p className="text-xs text-lightest/80">
            Through regular events, shared meals, and spontaneous interactions, we create an environment where ideas
            flow freely and new projects are born naturally.
          </p>
        </div>
      </section>

      <MailingList />
    </div>
  )
}
