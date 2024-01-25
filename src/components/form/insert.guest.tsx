"use client"

import { ContainerInline } from "@/components/form/_components"
import GenericSubmit from "@/components/form/generic-submit"
import { Input } from "@/components/ui/input"
import { useFormStatus } from "react-dom"

export default function FormInsertGuest(props: FormUpsertGuestProps) {
  const status = useFormStatus()

  return (
    <ContainerInline disabled={status.pending}>
      <h4 className="mb-2 font-bold">Add Guest</h4>
      <Input name="slug" value={props.groupSlug} type="hidden" />
      <Input name="name" placeholder="Guest Name" />
      <GenericSubmit pending={status.pending} />
    </ContainerInline>
  )
}

interface FormUpsertGuestProps {
  groupSlug: string
}
