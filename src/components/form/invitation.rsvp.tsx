import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Container } from "./_components"

export default function FormInvitationRsvp() {
  return (
    <Container>
      <Label>
        Question
        <Input className="mt-1" placeholder="Quick brown fox jumps over the lazy dog" />
      </Label>
      <div className="grid grid-cols-2 gap-2">
        <Label>
          Positive Answer
          <Input className="mt-1" placeholder="Quick brown fox jumps over the lazy dog" />
        </Label>
        <Label>
          Negative Answer
          <Input className="mt-1" placeholder="Quick brown fox jumps over the lazy dog" />
        </Label>
      </div>
    </Container>
  )
}
