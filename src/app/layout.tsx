import { poppins } from "@/components/fonts"
import { Toaster } from "@/components/ui/toaster"
import { Providers } from "@/lib/providers"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "pasa.li",
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.css" rel="stylesheet" />
      </head>
      <body className={poppins.className}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  )
}
