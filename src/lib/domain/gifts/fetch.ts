import { database } from "@/lib/repository/database"
import { getEvent } from "@/lib/repository/event"

export async function fetchGifts(): Promise<Gift[]> {
  const event = await getEvent()

  return database.eventGift.findMany({ where: { userEventId: event.id }, select: { slug: true, name: true } })
}

export interface Gift {
  slug: string
  name: string
}
