import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Separator } from "@/components/ui/separator"
import { Toolbar } from "@/components/ui/toolbar"

export default function ContentToolbarLoading() {
  return (
    <div className="sticky top-0">
      <Toolbar disabled>
        <Button variant="ghost" size="sm">
          <Icon className="md:mr-2" name="UserPlus" />
          <span className="hidden md:block">Add Guest</span>
        </Button>
        <Button variant="ghost" size="sm">
          <Icon className="md:mr-2" name="ArrowUpDown" />
          <span className="hidden md:block">Sort</span>
        </Button>
        <Separator className="mx-2 h-8" orientation="vertical" />
        <Button variant="ghost" size="sm">
          <Icon className="md:mr-2" name="PenSquare" />
          <span className="hidden md:block">Rename</span>
        </Button>
        <Button variant="ghost" size="sm">
          <Icon className="md:mr-2" name="Trash" />
          <span className="hidden md:block">Delete</span>
        </Button>
      </Toolbar>
    </div>
  )
}
