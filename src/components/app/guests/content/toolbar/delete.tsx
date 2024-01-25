"use client"

import GenericDelete from "@/components/form/generic-delete"

export default function ToolbarDelete(props: ToolbarDeleteProps) {
  return (
    <GenericDelete
      noun="Group"
      description="Deleting this group will also delete all guests added."
      align="end"
      onAction={props.onAction}
    />
  )
}

interface ToolbarDeleteProps {
  onAction(): Promise<void>
}
