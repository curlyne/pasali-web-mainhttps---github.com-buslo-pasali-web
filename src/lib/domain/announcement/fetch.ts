import { database } from "@/lib/repository/database"
import { getEvent } from "@/lib/repository/event"

export async function fetchAnnouncementList(): Promise<Announcement[]> {
  const event = await getEvent()

  return database.eventAnnouncement.findMany({
    where: { userEventId: event.id },
    select: { id: true, subject: true, sendDate: true },
  })
}

export async function fetchAnnouncementContent(id: number) {
  const event = await getEvent()

  return database.eventAnnouncement.findFirst({
    where: { id, userEventId: event.id },
  })
}

export interface Announcement {
  id: number
  subject: string
  sendDate: Date
}
