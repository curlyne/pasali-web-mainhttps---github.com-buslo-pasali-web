import { ContainerInline } from "@/components/form/_components"
import GenericSubmit from "@/components/form/generic-submit"
import { Input, InputProps } from "@/components/ui/input"
import { useFormStatus } from "react-dom"

export default function GenericRenameContent({ defaultValue, noun, inputProps }: GenericRenameFormProps) {
  const status = useFormStatus()

  return (
    <ContainerInline disabled={status.pending}>
      <h3 className="mb-2 font-medium">Rename {noun}</h3>
      <Input {...inputProps} name="name" {...{ defaultValue }} />
      <GenericSubmit pending={status.pending} />
    </ContainerInline>
  )
}

interface GenericRenameFormProps {
  noun: string
  defaultValue: string
  inputProps?: InputProps
}
