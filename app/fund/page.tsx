import { Button } from "@/components/ui/button"

export default function FundPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <p className="text-xs text-lightest">Capi House Fund</p>
        <div className="space-y-4">
          <p className="text-xs text-lightest/90">Supporting creative collaboration and community living.</p>

          <p className="text-xs text-lightest/80">
            The Capi House Fund was established to support our community and expand our impact. Through this fund, we're
            able to offer residencies to emerging artists, host public events, and maintain our shared creative spaces.
          </p>

          <p className="text-xs text-lightest mt-6">Our Initiatives</p>

          <ul className="space-y-4 text-xs text-lightest/80">
            <li>
              <strong className="text-lightest">Residency Program:</strong> Providing housing and studio space for
              artists, writers, and creators who otherwise couldn't afford to live and work in the city.
            </li>
            <li>
              <strong className="text-lightest">Community Workshops:</strong> Free and low-cost skill-sharing events
              open to the wider community.
            </li>
            <li>
              <strong className="text-lightest">Space Maintenance:</strong> Keeping our shared creative spaces
              well-equipped and accessible.
            </li>
            <li>
              <strong className="text-lightest">Sustainability Projects:</strong> Initiatives to reduce our
              environmental impact and create a more sustainable living model.
            </li>
          </ul>

          <p className="text-xs text-lightest mt-6">How You Can Support</p>

          <p className="text-xs text-lightest/80">
            Your contribution to the Capi House Fund directly supports our community and helps us expand our impact. We
            welcome one-time donations as well as recurring support.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <Button className="bg-medium hover:bg-lighter text-lightest text-xs h-8">Make a Donation</Button>
            <Button variant="outline" className="border-medium text-lightest hover:bg-medium text-xs h-8">
              Become a Monthly Supporter
            </Button>
          </div>

          <p className="text-xs text-lightest mt-8">Transparency</p>

          <p className="text-xs text-lightest/80">
            We're committed to transparency in how we use funds. Quarterly reports are shared with all contributors,
            detailing how donations have been allocated and the impact they've made.
          </p>
        </div>
      </section>
    </div>
  )
}
