"use client"

import { createAnnouncement } from "@/lib/domain/announcement/action"
import { useAction } from "@/lib/hooks"
import { usePathname } from "next/navigation"
import { useCallback, useMemo } from "react"

export function useAnnouncements() {
  const { action } = useAction("Announcement")

  return {
    create: useCallback(
      async (formData: FormData) => {
        await action("Create", () => createAnnouncement(formData))
      },
      [action],
    ),
  }
}

export function useAnnouncementsItem(id: number) {
  const pathname = usePathname()

  return {
    href: useMemo(() => `/app/announcements/${id}`, []),
    isSelected: useMemo(() => {
      if (pathname === "/app/announcements") {
        return null
      }

      return pathname.endsWith(id.toString()) || pathname.endsWith(`${id}/recipients`)
    }, [id, pathname]),
  }
}
