"use client"

import { createVenue, deleteVenue, renameVenue } from "@/lib/domain/venue/action"
import { useAction } from "@/lib/hooks"
import { usePathname } from "next/navigation"
import { useCallback, useMemo } from "react"

export function useVenue() {
  const { action } = useAction("Venue")

  return {
    create: useCallback(
      async (form: FormData) => {
        await action("Create", () => createVenue(form))
      },
      [action],
    ),
  }
}

export function useVenueItem(slug: string) {
  const { action } = useAction("Venue")
  const pathname = usePathname()

  return {
    href: `/app/venue/${slug}`,
    isSelected: useMemo(() => {
      if (pathname === "/app/venue") {
        return null
      }

      return decodeURI(pathname).endsWith(`venue/${slug}`)
    }, [pathname, slug]),
    delete: useCallback(
      async (/**/) => {
        await action("Delete", () => deleteVenue(slug))
      },
      [action, slug],
    ),
    rename: useCallback(
      async (newValue: string) => {
        await action("Rename", () => renameVenue(slug, newValue))
      },
      [action, slug],
    ),
  }
}
