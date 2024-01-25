"use client"

import ToolbarDelete from "@/components/app/venue/content/toolbar/delete"
import ToolbarRename from "@/components/app/venue/content/toolbar/rename"
import { Toolbar } from "@/components/ui/toolbar"
import { useVenueItem } from "@/lib/domain/venue/state"

export default function ContentToolbar({ venueSlug, venueName }: ContentToolbarProps) {
  const { delete: deleteVenue, rename: renameVenue } = useVenueItem(venueSlug)

  return (
    <Toolbar title={venueName}>
      <ToolbarRename onAction={renameVenue} name={venueName} />
      <ToolbarDelete onAction={deleteVenue} />
    </Toolbar>
  )
}

interface ContentToolbarProps {
  venueSlug: string
  venueName: string
}
