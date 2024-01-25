"use client"

import ToolbarDelete from "@/components/app/guests/content/toolbar/delete"
import ToolbarInsert from "@/components/app/guests/content/toolbar/insert"
import ToolbarRename from "@/components/app/guests/content/toolbar/rename"
import ToolbarSort from "@/components/app/guests/content/toolbar/sort"
import { Separator } from "@/components/ui/separator"
import { Toolbar } from "@/components/ui/toolbar"
import { useGuestGroup } from "@/lib/domain/guests/state"

export default function ContentToolbar({ groupSlug, groupName }: ContentToolbarProps) {
  const { delete: deleteGroup, update: updateGroup, createGuest } = useGuestGroup(decodeURI(groupSlug))

  return (
    <Toolbar title={groupName}>
      <ToolbarInsert onAction={createGuest} groupSlug={groupSlug} />
      <ToolbarSort />
      <Separator className="mx-2 h-8" orientation="vertical" />
      <ToolbarRename onAction={updateGroup} groupName={groupName} />
      <ToolbarDelete onAction={deleteGroup} />
    </Toolbar>
  )
}

interface ContentToolbarProps {
  groupSlug: string
  groupName: string
}
