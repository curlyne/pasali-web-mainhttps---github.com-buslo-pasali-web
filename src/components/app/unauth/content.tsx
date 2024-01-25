"use client"

import FormUnAuth from "@/components/form/unauth"
import { Card } from "@/components/ui/card"
import { performLogin } from "@/lib/domain/unauth/action"
import { useFormState } from "react-dom"

export default function UnAuthContent({ eventName }: UnAuthContentProps) {
  const [state, action] = useFormState(performLogin, { message: null })

  return (
    <form {...{ action }} className="p-3 w-[380px]">
      <h2 className="text-lg font-bold p-3 mb-2">Login to {eventName}</h2>
      <Card className="p-3">
        <FormUnAuth />
      </Card>
    </form>
  )
}

interface UnAuthContentProps {
  eventName: string
}
