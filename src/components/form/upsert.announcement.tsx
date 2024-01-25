"use client"

import { ContainerInline } from "@/components/form/_components"
import GenericSubmit from "@/components/form/generic-submit"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Icon } from "@/components/ui/icon"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { format } from "date-fns"
import { useState } from "react"
import { useFormStatus } from "react-dom"

export default function FormUpsertAnnouncement() {
  const status = useFormStatus()
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <ContainerInline disabled={status.pending}>
      <h4 className="mb-2 font-medium">Create Announcement</h4>
      <div className="flex flex-col gap-2 w-[240px]">
        <Input placeholder="Title" name="title" />
        <Input type="hidden" name="date" value={date?.toISOString()} />
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="input" contentAlignment="leading">
              <span className="flex-grow text-left">{date ? format(date, "MMMM dd, yyyy") : "Announcement Date"}</span>
              <Icon name="Calendar" className="ml-2" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" initialFocus selected={date} onSelect={setDate} />
          </PopoverContent>
        </Popover>
      </div>
      <Textarea className="mt-2" placeholder="Content" name="content" />
      <GenericSubmit />
    </ContainerInline>
  )
}
