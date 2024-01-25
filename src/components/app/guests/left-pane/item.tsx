"use client"

import LeftPaneButton from "@/components/ui/left-pane-button"
import { GuestGroup } from "@/lib/domain/guests/fetch"
import { useGuestGroup } from "@/lib/domain/guests/state"
import { useMemo } from "react"

export default function LeftPaneItem({ group, firstSlug }: LeftPaneItemProps) {
  const { isSelected, href } = useGuestGroup(decodeURI(group.slug))

  const selected = useMemo(() => {
    if (isSelected !== null) {
      return isSelected
    }

    return firstSlug == group.slug
  }, [firstSlug, group.slug, isSelected])

  return <LeftPaneButton {...{ href, selected }}>{group.name}</LeftPaneButton>
}

interface LeftPaneItemProps {
  group: GuestGroup
  firstSlug: string
}
