"use server"

import { database } from "@/lib/repository/database"
import { getEvent } from "@/lib/repository/event"
import { makeSlug } from "@/lib/utils"
import { first } from "lodash"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

export async function createVenue(form: FormData) {
  const event = await getEvent()

  const parsed = requirementUpsertVenue.safeParse({
    name: form.get("name"),
    link: form.get("link"),
    address: form.get("address"),
    purpose: form.get("purpose"),
  })

  if (parsed.success) {
    const { slug } = await database.eventVenue.create({
      data: {
        name: parsed.data.name,
        slug: makeSlug(parsed.data.name),
        address: parsed.data.address,
        purpose: parsed.data.purpose,
        link: parsed.data.link ?? null,
        userEventId: event.id,
      },
    })

    revalidatePath("/app/(page)/venue/(page)/@leftPane/default")
    redirect(`/app/venue/${slug}`)
  } else {
    throw new Error(`Invalid Fields: ${first(parsed.error.errors)?.message ?? ""}`)
  }
}

export async function deleteVenue(slug: string) {
  const event = await getEvent()

  await database.eventVenue.delete({ where: { eventSlug: { userEventId: event.id, slug } } })

  revalidatePath("/app/(page)/venue/(page)/@leftPane/default")
  redirect(`/app/venue`)
}

export async function renameVenue(slug: string, newValue: string) {
  const event = await getEvent()

  const { slug: newSlug } = await database.eventVenue.update({
    where: { eventSlug: { slug, userEventId: event.id } },
    data: { name: newValue, slug: makeSlug(newValue) },
    select: {
      slug: true,
    },
  })

  revalidatePath("/app/(page)/venue/(page)/@leftPane/default")
  redirect(`/app/venue/${newSlug}`)
}

const requirementUpsertVenue = z.object({
  name: z.string().min(4, "Name needs to be at least 4 characters."),
  address: z.string().min(8, "Address needs to be at least 8 characters."),
  purpose: z.string(),
  link: z.string().nullable(),
})
