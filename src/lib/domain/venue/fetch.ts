import { database } from "@/lib/repository/database"
import { getEvent } from "@/lib/repository/event"
import { notFound } from "next/navigation"

export async function fetchVenue(): Promise<Venue[]> {
  const event = await getEvent()

  return database.eventVenue.findMany({
    where: { userEventId: event.id },
    select: { name: true, slug: true },
  })
}

export async function fetchVenueContent(slug: string): Promise<VenueContent> {
  const venue = await database.eventVenue.findFirst({
    where: { slug },
    select: { slug: true, name: true, address: true },
  })

  if (!venue) {
    notFound()
  }

  return { ...venue, link: "", longitude: 0, latitude: 0 }
}

export interface Venue {
  slug: string
  name: string
}

export interface VenueContent extends Venue {
  address: string
  link: string

  longitude: number
  latitude: number
}
