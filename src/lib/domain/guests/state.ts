"use client"

import {
  createGuest,
  createGuestGroup,
  deleteGuest,
  deleteGuestGroup,
  updateGuest,
  updateGuestGroup,
} from "@/lib/domain/guests/action"
import { useAction } from "@/lib/hooks"
import { usePathname, useSearchParams } from "next/navigation"
import { useCallback, useMemo } from "react"

export function useGuest() {
  const { action } = useAction("Guest Group")

  return {
    create: useCallback(
      async function (formData: FormData) {
        await action("Create", async () => createGuestGroup(formData))
      },
      [action],
    ),
  }
}

export function useGuestItem(groupSlug: string, guestId: number) {
  const { action } = useAction("Guest")

  return {
    delete: useCallback(
      async (/**/) => {
        await action("Delete", () => deleteGuest(groupSlug, guestId))
      },
      [action, groupSlug, guestId],
    ),
    update: useCallback(
      async (newName: string) => {
        await action("Rename", () => updateGuest(groupSlug, guestId, newName))
      },
      [action, groupSlug, guestId],
    ),
  }
}

export function useGuestGroup(groupSlug: string) {
  const { action } = useAction("Guest Group")

  const pathname = usePathname()
  const searchPath = useSearchParams()

  const hasSort = useMemo(() => searchPath.get("sort") != null, [searchPath])

  return {
    href: useMemo(() => {
      return hasSort ? `/app/guests/${groupSlug}?${searchPath.toString()}` : `/app/guests/${groupSlug}`
    }, [hasSort, groupSlug, searchPath]),
    isSelected: useMemo(() => {
      if (pathname === "/app/guests") {
        return null
      }

      return decodeURI(pathname).endsWith(`guests/${groupSlug}`)
    }, [groupSlug, pathname]),
    delete: useCallback(
      async (/**/) => {
        await action("Delete", () => deleteGuestGroup(groupSlug))
      },
      [action, groupSlug],
    ),
    update: useCallback(
      async (newName: string) => {
        await action("Rename", () => updateGuestGroup(groupSlug, newName))
      },
      [action, groupSlug],
    ),
    createGuest: useCallback(
      async (formData: FormData) => {
        await action("Create", () => createGuest(groupSlug, formData))
      },
      [action, groupSlug],
    ),
  }
}
