import { database } from "@/lib/repository/database"
import { getEvent } from "@/lib/repository/event"

function makeLink(label: string, link: string, redirect: string | null) {
  return { label, href: redirect ? `${link}/${redirect}` : link, link }
}

function makeAccount(label: string, link: string) {
  return { label, link }
}

export async function fetchAppNavbar() {
  const event = await getEvent()

  const [venue, group, announcement, gift] = await database.$transaction([
    database.eventVenue.findFirst({ where: { userEventId: event.id }, select: { slug: true } }),
    database.eventGuestGroup.findFirst({ where: { userEventId: event.id }, select: { slug: true } }),
    database.eventAnnouncement.findFirst({ where: { userEventId: event.id }, select: { id: true } }),
    database.eventGift.findFirst({ where: { userEventId: event.id }, select: { slug: true } }),
  ])

  return {
    tabs: [
      makeLink("Home", "/app", null),
      makeLink("Website", "/app/website", null),
      makeLink("Venue", "/app/venue", venue?.slug ?? null),
      makeLink("Guests", "/app/guests", group?.slug ?? null),
      makeLink("Announcements", "/app/announcements", announcement?.id.toString() ?? null),
      makeLink("Gift Registry", "/app/gifts", gift?.slug ?? null),
    ],
    accounts: [
      makeAccount("Account 1", "/manage-events/switch/account-1"),
      makeAccount("Account 2", "/manage-events/switch/account-2"),
    ],
  }
}
