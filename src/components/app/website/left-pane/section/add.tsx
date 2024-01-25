import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Icon } from "@/components/ui/icon"
import { fetchWebsiteAvailableSections } from "@/lib/domain/website/fetch"

export default async function SectionAdd() {
  const items = await fetchWebsiteAvailableSections()

  return (
    <Dialog>
      <DialogTrigger>
        <Card className="flex flex-col gap-2 p-4 items-center text-sm select-none hover:cursor-pointer">
          <Icon name="CopyPlus" size={32} />
          Create Section
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Section</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-4 gap-2">
          {items.map((item) => (
            <Button
              key={item.id}
              variant="secondary"
              className="aspect-square h-auto whitespace-normal text-xs flex flex-col gap-2"
            >
              <Icon name={item.icon as any} size={24} />
              {item.label}
            </Button>
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
