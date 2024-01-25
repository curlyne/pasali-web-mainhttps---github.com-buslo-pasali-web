import FormStyleSize from "@/components/form/style.size"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Section, SectionHeader } from "./_components"

export default function SectionGenericParagraph() {
  return (
    <Section>
      <SectionHeader title="Paragraph" movable>
        <Button size="icon" variant="ghost">
          <Icon name="AlignStartVertical" />
        </Button>
        <Button size="icon" variant="ghost">
          <Icon name="AlignCenterVertical" />
        </Button>
        <Button size="icon" variant="ghost">
          <Icon name="AlignEndVertical" />
        </Button>
        <Separator orientation="vertical" className="h-10 mx-2" />
        <Button size="icon" variant="ghost">
          <Icon name="Trash" />
        </Button>
      </SectionHeader>
      <FormStyleSize />
      <Textarea />
    </Section>
  )
}
