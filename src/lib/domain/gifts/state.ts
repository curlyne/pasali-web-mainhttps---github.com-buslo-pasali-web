"use client"

import { createGift } from "@/lib/domain/gifts/action"
import { useAction } from "@/lib/hooks"
import { useCallback, useMemo } from "react"

export function useGifts() {
  const { action } = useAction("Gift")

  return {
    create: useCallback(
      async (form: FormData) => {
        await action("Create", () => createGift(form))
      },
      [createGift],
    ),
  }
}

export function useGiftItem(slug: string) {
  return {
    href: useMemo(() => `/app/gifts/${slug}`, [slug]),
    isSelected: useMemo(() => false, []),
  }
}
