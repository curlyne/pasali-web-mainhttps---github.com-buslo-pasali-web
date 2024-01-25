import GenericRenameContent from "@/components/form/generic-rename/content"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { InputProps } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { usePopoverAction } from "@/lib/hooks"
import { PopoverContentProps } from "@radix-ui/react-popover"

export default function GenericRename(props: GenericRenameProps) {
  const [open, onOpenChange, action] = usePopoverAction(async (form: FormData) => {
    await props.onAction(form.get("name") as string)
  })

  return (
    <Popover {...{ open, onOpenChange }}>
      <PopoverTrigger asChild>
        {props.iconOnly ? (
          <Button variant="ghost" size="icon">
            <Icon name="PenSquare" />
          </Button>
        ) : (
          <Button variant="ghost" size="sm">
            <Icon name="PenSquare" className="md:mr-2" />
            <span className="hidden md:block">Rename</span>
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent align={props.align ?? "center"} className="flex flex-col gap-2" asChild>
        <form action={action}>
          <GenericRenameContent {...props} />
        </form>
      </PopoverContent>
    </Popover>
  )
}

interface GenericRenameProps {
  noun: string
  defaultValue: string
  inputProps?: InputProps
  iconOnly?: boolean
  align?: PopoverContentProps["align"]
  onAction(newValue: string): Promise<void>
}
