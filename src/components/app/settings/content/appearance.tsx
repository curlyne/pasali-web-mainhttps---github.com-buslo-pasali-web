import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContentAppearance() {
  return (
    <div className="flex flex-col gap-2 items-start">
      <Label>
        App Theme
        <Select>
          <SelectTrigger className="w-[180px] mt-2">
            <SelectValue>Light</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="auto">System</SelectItem>
          </SelectContent>
        </Select>
      </Label>
    </div>
  )
}
