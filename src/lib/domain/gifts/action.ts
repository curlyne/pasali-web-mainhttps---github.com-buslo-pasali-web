"use server"

import { database } from "@/lib/repository/database"
import { getEvent } from "@/lib/repository/event"
import { makeSlug } from "@/lib/utils"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

export async function createGift(form: FormData) {
  const parsed = requirementsCreate.safeParse({
    name: form.get("name"),
    type: form.get("type"),
    link: form.get("link"),
    picture: form.get("picture"),
    description: form.get("description"),
    bank: form.get("bank"),
    accountNumber: form.get("accountNumber"),
    qrcode: form.get("qrcode"),
  })

  if (parsed.success) {
    const event = await getEvent()
    let slug: string

    switch (parsed.data.type) {
      case "link":
        {
          const gift = await database.eventGift.create({
            data: {
              userEventId: event.id,
              slug: makeSlug(parsed.data.name),
              name: parsed.data.name,
              type: parsed.data.type,
              link: parsed.data.link,
              picture: "", // TODO: get og image of link if any
              content: parsed.data.description,
            },
            select: {
              slug: true,
            },
          })

          slug = gift.slug
        }
        break
      case "money":
        {
          const gift = await database.eventGift.create({
            data: {
              userEventId: event.id,
              slug: makeSlug(parsed.data.name),
              name: parsed.data.name,
              type: parsed.data.type,
              link: "", // TODO: QRPH code?
              picture: "", // TODO: link bank type to image
              content: parsed.data.description,
              otherData: {
                bank: parsed.data.bank,
                accountNumber: parsed.data.accountNumber,
              },
            },
            select: {
              slug: true,
            },
          })

          slug = gift.slug
        }
        break
      case "other":
        {
          const gift = await database.eventGift.create({
            data: {
              userEventId: event.id,
              slug: makeSlug(parsed.data.name),
              name: parsed.data.name,
              type: parsed.data.type,
              link: "", // no link intentionally
              picture: parsed.data.picture ?? "/public/blank/gift",
              content: parsed.data.description,
            },
            select: {
              slug: true,
            },
          })

          slug = gift.slug
        }
        break
    }

    revalidatePath("/app/gifts")
    redirect(`/app/gifts/${slug}`)
  } else {
    throw new Error("Invalid fields.")
  }
}

const requirementsCreate = z.discriminatedUnion("type", [
  z.object({
    name: z.string().min(4),
    type: z.literal("link"),
    description: z.string(),
    link: z.string().url(),
  }),
  z.object({
    name: z.string().min(4),
    type: z.literal("money"),
    description: z.string(),
    bank: z.string(),
    accountNumber: z.string().min(9),
    qrcode: z.instanceof(File).nullable(),
  }),
  z.object({
    name: z.string().min(4),
    type: z.literal("other"),
    description: z.string(),
    picture: z.string().nullable(),
  }),
])
