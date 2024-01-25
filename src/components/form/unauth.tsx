import { Container } from "@/components/form/_components"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormStatus } from "react-dom"

export default function FormUnAuth() {
  const status = useFormStatus()

  return (
    <Container disabled={status.pending}>
      <Label>
        Email Address
        <Input className="mt-2" name="email" type="email" />
      </Label>
      <Button className="self-start mt-2" variant="default" size="sm">
        {status.pending ? "Logging In" : "Login"}
      </Button>
    </Container>
  )
}
