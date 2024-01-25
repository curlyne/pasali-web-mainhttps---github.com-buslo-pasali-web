"use client"

import GenericDelete from "@/components/form/generic-delete"

export default function ItemDelete(props: ItemDeleteProps) {
  return <GenericDelete align="end" noun="Guest" onAction={props.onAction} iconOnly />
}

interface ItemDeleteProps {
  onAction(): Promise<void>
}
