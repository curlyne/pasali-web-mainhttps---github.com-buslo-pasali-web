import { database } from "@/lib/repository/database"
import { getEvent } from "@/lib/repository/event"
import { $Enums } from "@prisma/client"
import { notFound } from "next/navigation"

export async function fetchGuestGroup(): Promise<GuestGroup[]> {
  const event = await getEvent()

  return database.eventGuestGroup.findMany({
    where: { userEventId: event.id },
    select: {
      slug: true,
      name: true,
    },
    orderBy: {
      sortOrder: "asc",
    },
  })
}

export async function fetchGuestGroupContent(slug: string, sort: string | null): Promise<GuestGroupContent> {
  const group = await database.eventGuestGroup.findFirst({
    where: { slug: decodeURI(slug) },
    select: {
      name: true,
      guests: {
        where: {
          guestOwner: {
            equals: null,
          },
        },
        select: {
          id: true,
          name: true,
          contact: true,
          otherData: true,
          response: true,
        },
      },
    },
  })

  if (!group) {
    notFound()
  }

  return {
    name: group.name,
    guests: group.guests.map((guest) => ({
      id: guest.id,
      name: guest.name,
      contact: guest.contact as Guest["contact"],
      otherData: guest.otherData,
      response: guest.response,
    })),
  }
}

export interface GuestGroup {
  slug: string
  name: string
}

export interface GuestGroupContent {
  name: string
  guests: Guest[]
}

export interface Guest {
  id: number
  name: string
  contact: {
    phone: string
    email: string
  }
  otherData: any
  response: $Enums.GuestResponse
}
