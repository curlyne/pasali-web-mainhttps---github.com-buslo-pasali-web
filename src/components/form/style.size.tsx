import { Container } from "@/components/form/_components"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FormStyleSize() {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-2">
        <Label className="col-span-2">
          Font
          <Select>
            <SelectTrigger className="mt-1">
              <SelectValue>Normal</SelectValue>
            </SelectTrigger>
            <SelectContent></SelectContent>
          </Select>
        </Label>
        <Label>
          Size
          <Input className="mt-1" type="number" />
        </Label>
      </div>
    </Container>
  )
}
