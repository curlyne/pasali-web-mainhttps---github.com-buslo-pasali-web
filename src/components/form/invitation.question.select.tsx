import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Container } from "./_components"

export default function FormInvitationQuestionSelect() {
  return (
    <Container>
      <div className="flex flex-col gap-1">
        <Label>Options</Label>
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
      <Label>
        Maximum Selection Count
        <Input className="mt-1" type="number" />
      </Label>
    </Container>
  )
}
