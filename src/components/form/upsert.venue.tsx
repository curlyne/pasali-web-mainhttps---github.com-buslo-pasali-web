"use client"

import { ContainerInline } from "@/components/form/_components"
import GenericSubmit from "@/components/form/generic-submit"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { useFormStatus } from "react-dom"

export default function FormVenueUpsert() {
  const status = useFormStatus()
  const [purpose, setPurpose] = useState("")

  return (
    <ContainerInline disabled={status.pending}>
      <h4 className="mb-2 font-medium">Create Venue</h4>
      <Input placeholder="Venue Name" name="name" />
      <Input placeholder="Address" name="address" />
      <Input type="hidden" name="purpose" value={purpose} />
      <Select value={purpose} onValueChange={setPurpose}>
        <SelectTrigger>
          <SelectValue placeholder="Purpose" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ceremoy">Ceremony</SelectItem>
          <SelectItem value="reception">Reception</SelectItem>
          <SelectItem value="meeting-place">Meeting Place</SelectItem>
          <SelectItem value="unspecified">Other</SelectItem>
        </SelectContent>
      </Select>
      <GenericSubmit pending={status.pending} />
    </ContainerInline>
  )
}
