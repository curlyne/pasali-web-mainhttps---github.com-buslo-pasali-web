"use client"

import LeftPaneButton from "@/components/ui/left-pane-button"
import { Venue } from "@/lib/domain/venue/fetch"
import { useVenueItem } from "@/lib/domain/venue/state"
import { useMemo } from "react"

export default function LeftPaneItem({ venue, firstSlug }: LeftPaneItemProps) {
  const { href, isSelected } = useVenueItem(venue.slug)

  const selected = useMemo(() => {
    if (isSelected !== null) {
      return isSelected
    } else {
      return venue.slug === firstSlug
    }
  }, [firstSlug, isSelected, venue.slug])

  return <LeftPaneButton {...{ href, selected }}>{venue.name}</LeftPaneButton>
}

interface LeftPaneItemProps {
  venue: Venue
  firstSlug: string
}
