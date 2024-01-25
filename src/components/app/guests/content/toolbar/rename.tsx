"use client"

import GenericRename from "@/components/form/generic-rename"

export default function ToolbarRename(props: ToolbarRenameProps) {
  return (
    <GenericRename
      noun="Guest Group"
      align="end"
      defaultValue={props.groupName}
      inputProps={{ placeholder: "New Group Name", type: "text", minLength: 4 }}
      onAction={props.onAction}
    />
  )
}

interface ToolbarRenameProps {
  groupName: string

  onAction(newName: string): Promise<void>
}
