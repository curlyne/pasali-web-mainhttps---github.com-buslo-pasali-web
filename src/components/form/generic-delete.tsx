"use client"

import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useLoadingAction } from "@/lib/hooks"
import { PopoverContentProps } from "@radix-ui/react-popover"
import { Fragment, useState } from "react"

export default function GenericDelete(props: DeleteConfirmProps) {
  const [open, onOpenChange] = useState(false)
  const [submitting, action] = useLoadingAction(async () => {
    await props.onAction()
    onOpenChange(false)
  })

  return (
    <Popover {...{ open, onOpenChange }}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size={props.iconOnly ? "icon" : "sm"}>
          {props.iconOnly ? (
            <Icon name="Trash" />
          ) : (
            <Fragment>
              <Icon name="Trash" className="md:mr-2" />
              <span className="hidden md:block">Delete</span>
            </Fragment>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align={props.align ?? "center"} className="flex flex-col select-none">
        <h3 className="font-medium">Delete {props.noun}?</h3>
        {props.description && <span className="text-sm opacity-65">{props.description}</span>}
        <fieldset className="flex flex-row gap-2 mt-4" disabled={submitting}>
          <Button variant="destructive" size="sm" onClick={action}>
            {submitting ? "Deleting" : "Delete"}
          </Button>
          <PopoverClose asChild>
            <Button variant="secondary" size="sm">
              Cancel
            </Button>
          </PopoverClose>
        </fieldset>
      </PopoverContent>
    </Popover>
  )
}

interface DeleteConfirmProps {
  noun: string
  description?: string
  iconOnly?: boolean
  align?: PopoverContentProps["align"]
  onAction(): Promise<void>
}
