"use client"

import FormUpsertGift from "@/components/form/upsert.gift"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useGifts } from "@/lib/domain/gifts/state"
import { usePopoverAction } from "@/lib/hooks"

export default function LeftPaneCreate() {
  const { create: createGift } = useGifts()
  const [open, onOpenChange, action] = usePopoverAction(createGift)

  return (
    <Popover {...{ open, onOpenChange }}>
      <PopoverTrigger asChild>
        <Button variant="link" className="mb-2" contentAlignment="leading" size="sm">
          <Icon name="PlusSquare" className="mr-2" />
          Create Gift
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[440px]" asChild>
        <form {...{ action }}>
          <FormUpsertGift />
        </form>
      </PopoverContent>
    </Popover>
  )
}
