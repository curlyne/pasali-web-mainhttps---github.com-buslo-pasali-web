import { Container } from "@/components/form/_components"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FormWebsiteVenue() {
  return (
    <Container>
      <Label>
        Style
        <Select>
          <SelectTrigger className="mt-1">
            <SelectValue>Normal</SelectValue>
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
      </Label>
      <Button className="self-start" size="sm" variant="secondary">
        Manage Venues
      </Button>
    </Container>
  )
}
