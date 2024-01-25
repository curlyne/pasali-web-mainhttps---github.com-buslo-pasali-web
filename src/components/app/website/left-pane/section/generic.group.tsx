import SectionAdd from "@/components/app/website/left-pane/section/add"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Separator } from "@/components/ui/separator"
import { Section, SectionHeader } from "./_components"

export default function SectionGenericGroup(props: React.PropsWithChildren) {
  return (
    <Section>
      <SectionHeader title="Group" movable>
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
      <div className="flex flex-col gap-2">
        {props.children}
        <SectionAdd />
      </div>
    </Section>
  )
}
