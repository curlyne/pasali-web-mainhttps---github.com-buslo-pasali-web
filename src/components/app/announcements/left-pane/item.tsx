"use client"

import LeftPaneButton from "@/components/ui/left-pane-button"
import { Announcement } from "@/lib/domain/announcement/fetch"
import { useAnnouncementsItem } from "@/lib/domain/announcement/state"
import { useMemo } from "react"

export default function LeftPaneItem({ announcement, firstId }: LeftPaneItemProps) {
  const { href, isSelected } = useAnnouncementsItem(announcement.id)

  const selected = useMemo(() => {
    if (isSelected !== null) {
      return isSelected
    }

    return announcement.id === firstId
  }, [isSelected])

  return <LeftPaneButton {...{ href, selected }}>{announcement.subject}</LeftPaneButton>
}

interface LeftPaneItemProps {
  announcement: Announcement
  firstId: number
}
