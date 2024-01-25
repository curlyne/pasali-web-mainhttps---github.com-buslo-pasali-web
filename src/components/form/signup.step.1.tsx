"use client"

import { Container } from "@/components/form/_components"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormStatus } from "react-dom"

export default function FormSignupStep1() {
  const { pending } = useFormStatus()

  return (
    <Container disabled={pending}>
      <Label htmlFor="email">
        Email Address
        <Input className="mt-2" name="email" placeholder="your@email.here" />
      </Label>
      <Label htmlFor="event">
        Event Name
        <Input className="mt-2" name="event" placeholder="Our wedding or Jane's 18th birthday" />
      </Label>
    </Container>
  )
}
