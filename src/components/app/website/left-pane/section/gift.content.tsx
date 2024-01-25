import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Section, SectionHeader } from "./_components"

export default function SectionGiftContent() {
  return (
    <Section>
      <SectionHeader title="Content" movable>
        <Button variant="ghost" size="icon">
          <Icon name="LayoutGrid" />
        </Button>
        <Button variant="ghost" size="icon">
          <Icon name="LayoutList" />
        </Button>
      </SectionHeader>
      <Button className="self-start" variant="secondary" size="sm">
        Manage Gift Registry
      </Button>
    </Section>
  )
}
