"use client"

import { FormUpsertGuestGroup } from "@/components/form/insert.guest.group"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useGuest } from "@/lib/domain/guests/state"
import { usePopoverAction } from "@/lib/hooks"

export default function LeftPaneCreate() {
  const { create: createGroup } = useGuest()
  const [open, onOpenChange, action] = usePopoverAction(createGroup)

  return (
    <Popover {...{ open, onOpenChange }}>
      <PopoverTrigger asChild>
        <Button contentAlignment="leading" className="mb-2" variant="link" size="sm" type="button">
          <Icon name="PlusSquare" className="mr-2" />
          Create Group
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" asChild>
        <form action={action}>
          <FormUpsertGuestGroup />
        </form>
      </PopoverContent>
    </Popover>
  )
}
