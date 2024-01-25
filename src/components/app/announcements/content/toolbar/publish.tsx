import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"

export default function ToolbarPublish() {
  return (
    <Button variant="ghost" size="sm">
      <Icon name="Book" className="mr-2" />
      Publish
    </Button>
  )
}
