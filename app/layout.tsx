import type React from "react"
import { Inter, Poppins, Roboto_Mono, DM_Sans, Lora, Beth_Ellen } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"

// Load fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
})
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
})
const bethEllen = Beth_Ellen({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-beth-ellen",
})

export const metadata = {
  title: "Capi",
  description: "Capi House Community",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-darkest text-lightest",
          inter.variable,
          poppins.variable,
          robotoMono.variable,
          dmSans.variable,
          lora.variable,
          bethEllen.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="max-w-md mx-auto px-4 flex flex-col min-h-screen">
            <header className="py-6 flex items-center justify-start">
              <div className="font-beth-ellen text-medium text-5xl">capi</div>
            </header>
            <main className="py-8 flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
