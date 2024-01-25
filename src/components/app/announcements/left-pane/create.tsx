"use client"

import FormUpsertAnnouncement from "@/components/form/upsert.announcement"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useAnnouncements } from "@/lib/domain/announcement/state"
import { usePopoverAction } from "@/lib/hooks"

export default function LeftPaneCreate() {
  const { create: createAnnouncement } = useAnnouncements()
  const [open, onOpenChange, action] = usePopoverAction(createAnnouncement)

  return (
    <Popover {...{ open, onOpenChange }}>
      <PopoverTrigger asChild>
        <Button variant="link" className="mb-2" contentAlignment="leading" size="sm">
          <Icon name="BellPlus" className="mr-2" />
          Create Announcement
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[440px]" asChild>
        <form action={action}>
          <FormUpsertAnnouncement />
        </form>
      </PopoverContent>
    </Popover>
  )
}
