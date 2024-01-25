import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"

export default function ToolbarUnpublish() {
  return (
    <Button variant="ghost" size="sm">
      <Icon name="BookDashed" className="mr-2" />
      Unpublish
    </Button>
  )
}
