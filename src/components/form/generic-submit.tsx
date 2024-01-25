import { Button } from "@/components/ui/button"
import { PopoverClose } from "@/components/ui/popover"

export default function GenericSubmit(props: GenericSubmitProps) {
  return (
    <div className="flex flex-row gap-2  mt-2">
      {props.verb ? (
        <Button size="sm">{props.pending ? props.verb.pending : props.verb.normal}</Button>
      ) : (
        <Button size="sm">{props.pending ? "Saving" : "Save"}</Button>
      )}

      <PopoverClose asChild>
        <Button variant="secondary" size="sm">
          Cancel
        </Button>
      </PopoverClose>
    </div>
  )
}

interface GenericSubmitProps {
  pending?: boolean
  verb?: {
    pending: string
    normal: string
  }
}
