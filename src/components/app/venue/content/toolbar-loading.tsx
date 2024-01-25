import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Toolbar } from "@/components/ui/toolbar"

export default function ContentToolbarLoading() {
  return (
    <Toolbar disabled>
      <Button variant="ghost" size="sm">
        <Icon name="PenSquare" className="md:mr-2" />
        <span className="hidden md:block">Rename</span>
      </Button>
      <Button variant="ghost" size="sm">
        <Icon name="Trash" className="md:mr-2" />
        <span className="hidden md:block">Delete</span>
      </Button>
    </Toolbar>
  )
}
