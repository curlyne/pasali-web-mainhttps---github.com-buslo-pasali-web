import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function DetailsInformation() {
  return (
    <Card>
      <CardHeader className="font-semibold">Information</CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-3">
          <Label>
            Purpose
            <Select>
              <SelectTrigger className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent></SelectContent>
            </Select>
          </Label>
          <div />
        </div>
        <Label>
          Description
          <Textarea className="mt-2" />
        </Label>
        <div className="grid grid-cols-2 gap-3 mt-2">
          <Label>
            Phone Number
            <Input className="mt-2" />
          </Label>
          <Label>
            Email Address
            <Input className="mt-2" />
          </Label>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row gap-2">
        <Button variant="secondary" size="sm">
          Confirm
        </Button>
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
      </CardFooter>
    </Card>
  )
}
