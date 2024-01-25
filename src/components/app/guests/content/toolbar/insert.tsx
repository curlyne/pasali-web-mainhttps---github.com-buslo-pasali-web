import FormInsertGuest from "@/components/form/insert.guest"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { usePopoverAction } from "@/lib/hooks"

export default function ToolbarInsert({ groupSlug, onAction }: ToolbarAddProps) {
  const [open, onOpenChange, action] = usePopoverAction(onAction)

  return (
    <Popover {...{ open, onOpenChange }}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm">
          <Icon className="md:mr-2" name="UserPlus" />
          <span className="hidden md:block">Add Guest</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent asChild>
        <form action={action}>
          <FormInsertGuest groupSlug={groupSlug} />
        </form>
      </PopoverContent>
    </Popover>
  )
}

interface ToolbarAddProps {
  groupSlug: string
  onAction(formData: FormData): Promise<void>
}
