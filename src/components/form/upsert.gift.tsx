"use client"

import { ContainerInline } from "@/components/form/_components"
import GenericSubmit from "@/components/form/generic-submit"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Fragment, useState } from "react"
import { useFormStatus } from "react-dom"

export default function FormUpsertGift(props: FormUpsertGiftProps) {
  const status = useFormStatus()
  const [type, setType] = useState("item")

  return (
    <ContainerInline disabled={status.pending}>
      <div className="flex flex-col gap-2 w-[240px]">
        <h4 className="mb-2 font-medium">Create Gift</h4>
        <Input placeholder="Gift Name" name="name" />
        <Input type="hidden" name="type" value={type} />
        <Select value={type} onValueChange={setType}>
          <SelectTrigger>
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent align="start">
            <SelectItem value="item">Link</SelectItem>
            <SelectItem value="money">Money</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {type === "item" && (
        <Fragment>
          <Label>
            Link
            <Input className="mt-2" placeholder="Paste Shopee/Lazada/Amazon link here" name="link" />
          </Label>
        </Fragment>
      )}
      {type === "money" && (
        <Fragment>
          <Label>
            Bank details
            <Input className="mt-2" placeholder="Bank" name="bank" />
          </Label>
          <Input placeholder="Account Number" name="accountNumber" />
        </Fragment>
      )}
      {type === "other" && (
        <Fragment>
          <Label>
            Picture
            <Input className="mt-2" type="file" placeholder="Picture" name="picture" />
          </Label>
        </Fragment>
      )}
      <Label>
        Description
        <Textarea className="mt-2" name="description" />
      </Label>
      <GenericSubmit />
    </ContainerInline>
  )
}

interface FormUpsertGiftProps {}
