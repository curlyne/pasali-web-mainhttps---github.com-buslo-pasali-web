import { Section, SectionHeader } from "@/components/app/website/left-pane/section/_components"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Separator } from "@/components/ui/separator"

export default function SectionGenericMedia() {
  return (
    <Section>
      <SectionHeader title="Media" movable>
        <Button size="icon" variant="ghost">
          <Icon name="ImagePlus" />
        </Button>
        <Separator orientation="vertical" className="h-10 mx-2" />
        <Button size="icon" variant="ghost">
          <Icon name="LayoutGrid" />
        </Button>
        <Button size="icon" variant="ghost">
          <Icon name="StretchHorizontal" />
        </Button>
        <Button size="icon" variant="ghost">
          <Icon name="StretchVertical" />
        </Button>
        <Separator orientation="vertical" className="h-10 mx-2" />
        <Button size="icon" variant="ghost">
          <Icon name="Trash" />
        </Button>
      </SectionHeader>
    </Section>
  )
}
