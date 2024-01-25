import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function FormWebsiteHero() {
  return (
    <div className="flex flex-col gap-3">
      <Label>
        Title
        <Input className="mt-1" />
      </Label>
      <Label>
        Background Asset
        <Input className="mt-1 mb-2" type="file" />
        You can upload .png, .jpg, or .mp4 files.
      </Label>
    </div>
  )
}
