import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Textarea } from "@/components/ui/textarea"
import { Section, SectionHeader } from "./_components"

export default function SectionGenericEmbed() {
  return (
    <Section>
      <SectionHeader title="Embed" movable>
        <Button size="sm" variant="ghost">
          <Icon name="Trash" />
        </Button>
      </SectionHeader>
      <Textarea className="font-mono" />
    </Section>
  )
}
