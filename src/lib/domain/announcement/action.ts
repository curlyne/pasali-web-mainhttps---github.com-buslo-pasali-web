"use server"

import { database } from "@/lib/repository/database"
import { getEvent } from "@/lib/repository/event"
import { revalidatePath } from "next/cache"
import { z } from "zod"

export async function createAnnouncement(form: FormData) {
  const parsed = requirementCreateAnnouncement.safeParse({
    title: form.get("title"),
    content: form.get("content"),
    date: form.get("date"),
  })

  if (parsed.success) {
    const event = await getEvent()
    await database.eventAnnouncement.create({
      data: {
        subject: parsed.data.title,
        content: parsed.data.content,
        sendDate: parsed.data.date,
        userEventId: event.id,
      },
    })

    revalidatePath("/app/announcements")
  } else {
    console.log(parsed.error)
    throw Error("Invalid fields.")
  }
}

const requirementCreateAnnouncement = z.object({
  title: z.string().min(8),
  content: z.string().min(4),
  date: z.string().datetime(),
})
