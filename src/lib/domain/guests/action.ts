"use server"

import { database } from "@/lib/repository/database"
import { getEvent } from "@/lib/repository/event"
import { makeSlug } from "@/lib/utils"
import { first } from "lodash"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

// GUEST GROUP

export async function createGuestGroup(request: FormData) {
  const event = await getEvent()

  const parsed = requirementsCreateGuestGroup.safeParse({
    name: request.get("name"),
  })

  const count = await database.eventGuestGroup.count({
    where: { userEventId: event.id },
  })

  if (parsed.success) {
    const slug = makeSlug(parsed.data.name)
    await checkGroupUniqueness(event.id, parsed.data.name, slug)

    await database.eventGuestGroup.create({
      data: {
        slug,
        name: parsed.data.name,
        userEventId: event.id,
        sortOrder: count,
      },
    })

    revalidatePath("/app/(page)/guests/(page)/@leftPane/default")
    redirect(`/app/guests/${encodeURI(slug)}`)
  } else {
    throw new Error(`${first(parsed.error.errors)?.message ?? ""}`)
  }
}

export async function updateGuestGroup(slug: string, name: string) {
  const event = await getEvent()

  const parsed = requirementsCreateGuestGroup.safeParse({
    name,
  })

  if (parsed.success) {
    const newSlug = makeSlug(name)
    await checkGroupUniqueness(event.id, name, newSlug, slug)

    await database.eventGuestGroup.update({
      where: { eventSlug: { slug: decodeURI(slug), userEventId: event.id } },
      data: { name: parsed.data.name, slug: newSlug },
    })

    redirect(`/app/guests/${encodeURI(newSlug)}`)
  } else {
    throw new Error(`Invalid Fields: ${first(parsed.error.errors)?.message ?? ""}`)
  }
}

export async function deleteGuestGroup(slug: string) {
  const event = await getEvent()
  await database.eventGuestGroup.delete({
    where: { eventSlug: { slug: decodeURI(slug), userEventId: event.id } },
  })

  revalidatePath("/app/(page)/guests/(page)/@leftPane/default")
  redirect("/app/guests")
}

// GUESTS

export async function createGuest(groupSlug: string, request: FormData) {
  const event = await getEvent()

  const parsed = requirementsCreateGuest.safeParse({
    name: request.get("name"),
  })

  if (parsed.success) {
    const group = await database.eventGuestGroup.findFirst({
      where: { slug: groupSlug, userEventId: event.id },
      select: { id: true },
    })

    if (!group) {
      throw new Error("Guest Group not found")
    }

    await database.eventGuest.create({
      data: {
        name: parsed.data.name,
        guestGroupId: group.id,
        message: "",
      },
    })

    revalidatePath(`/app/(page)/guests/(page)/${groupSlug}/page`)
  } else {
    throw new Error(`Invalid Fields: ${first(parsed.error.errors)?.message ?? ""}`)
  }
}

export async function deleteGuest(groupSlug: string, guestId: number) {
  const event = await getEvent()
  await database.eventGuest.delete({ where: { id: guestId, guestGroup: { userEventId: event.id } } })

  revalidatePath(`/app/(page)/guests/(page)/${groupSlug}/page`)
}

export async function updateGuest(groupSlug: string, guestId: number, newName: string) {
  const event = await getEvent()
  await database.eventGuest.update({
    where: { id: guestId, guestGroup: { userEventId: event.id } },
    data: { name: newName },
  })

  revalidatePath(`/app/(page)/guests/(page)/${groupSlug}/page`)
}

// UTILITIES

async function checkGroupUniqueness(eventId: number, name: string, slug: string, oldSlug?: string) {
  const existing = await database.eventGuestGroup.count({ where: { slug, userEventId: eventId } })

  if (oldSlug === slug) {
    return
  }

  if (existing > 0) {
    throw new Error(`Group with name "${name}"already exists.`)
  }
}

const requirementsCreateGuestGroup = z.object({
  name: z.string().min(4, { message: "Name needs to be at least 4 characters." }),
})

const requirementsCreateGuest = z.object({
  name: z.string(),
})
