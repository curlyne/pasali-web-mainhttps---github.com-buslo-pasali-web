"use client"

import { ContainerInline } from "@/components/form/_components"
import GenericSubmit from "@/components/form/generic-submit"
import { Input } from "@/components/ui/input"
import { useFormStatus } from "react-dom"

export function FormUpsertGuestGroup() {
  const status = useFormStatus()

  return (
    <ContainerInline disabled={status.pending}>
      <h4 className="mb-2 font-medium">Create Group</h4>
      <Input name="name" placeholder="Group Name" type="text" minLength={4} />
      <GenericSubmit pending={status.pending} />
    </ContainerInline>
  )
}
