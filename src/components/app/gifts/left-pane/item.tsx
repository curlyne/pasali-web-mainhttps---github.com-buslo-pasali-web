"use client"

import LeftPaneButton from "@/components/ui/left-pane-button"
import { Gift } from "@/lib/domain/gifts/fetch"
import { useGiftItem } from "@/lib/domain/gifts/state"
import { useMemo } from "react"

export default function LeftPaneItem({ gift }: LeftPaneItemProps) {
  const { href, isSelected } = useGiftItem(gift.slug)

  const selected = useMemo(() => {
    return isSelected
  }, [isSelected])

  return <LeftPaneButton {...{ href, selected }}>{gift.name}</LeftPaneButton>
}

interface LeftPaneItemProps {
  gift: Gift
}
