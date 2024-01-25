"use client"

import FormVenueUpsert from "@/components/form/upsert.venue"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useVenue } from "@/lib/domain/venue/state"
import { usePopoverAction } from "@/lib/hooks"

export default function LeftPaneCreate() {
  const { create: createVenue } = useVenue()
  const [open, onOpenChange, action] = usePopoverAction(createVenue)

  return (
    <Popover {...{ open, onOpenChange }}>
      <PopoverTrigger asChild>
        <Button contentAlignment="leading" className="mb-2" variant="link" size="sm">
          <Icon name="PlusSquare" className="mr-2" />
          Create Venue
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" asChild>
        <form action={action}>
          <FormVenueUpsert />
        </form>
      </PopoverContent>
    </Popover>
  )
}
