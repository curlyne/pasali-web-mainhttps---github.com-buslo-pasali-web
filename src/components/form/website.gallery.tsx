import { Container } from "@/components/form/_components"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function FormWebsiteGallery() {
  return (
    <Container>
      <Label>
        Gallery Source
        <Input className="mt-1 mb-2" />
        Enter a Dropbox, Google Drive, or OneDrive link.
      </Label>
    </Container>
  )
}
