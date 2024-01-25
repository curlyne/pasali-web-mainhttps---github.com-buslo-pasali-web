"use client"

import { useToast } from "@/components/ui/use-toast"
import { useCallback, useState } from "react"

export function useAction(noun: string) {
  const { toast } = useToast()

  return {
    action: useCallback(
      async (verb: string, action: () => Promise<void>) => {
        try {
          await action()
          toast({
            title: `${noun} ${verb.endsWith("e") ? `${verb}d` : `${verb}ed`}`,
          })
        } catch (error) {
          toast({
            title: `Cannot ${verb} ${noun}`,
            description: (error as any).message,
            variant: "destructive",
          })
        }
      },
      [noun, toast],
    ),
  }
}

export function useLoadingAction(action: () => Promise<void>): [boolean, () => Promise<void>] {
  const [submitting, setSubmitting] = useState(false)

  const submit = useCallback(async () => {
    setSubmitting(true)
    await action()

    setSubmitting(false)
  }, [action])

  return [submitting, submit]
}

export function usePopoverAction<Param>(
  action: (param: Param) => Promise<void>,
): [boolean, React.Dispatch<React.SetStateAction<boolean>>, (param: Param) => Promise<void>] {
  const [open, onOpenChange] = useState(false)

  const submit = useCallback(
    async (param: Param) => {
      await action(param)
      onOpenChange(false)
    },
    [action],
  )

  return [open, onOpenChange, submit]
}
