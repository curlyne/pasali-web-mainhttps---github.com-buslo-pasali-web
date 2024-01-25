import { Inter, Poppins, Sometype_Mono, Urbanist } from "next/font/google"

export const inter = Inter({ subsets: ["latin"] })

export const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const sometypeMono = Sometype_Mono({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
})
