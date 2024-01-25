"use client"

import GenericDelete from "@/components/form/generic-delete"

export default function ToolbarDelete(props: ToolbarDeleteProps) {
  return <GenericDelete noun="Venue" align="end" onAction={props.onAction} />
}

interface ToolbarDeleteProps {
  onAction(): Promise<void>
}
