import GenericRename from "@/components/form/generic-rename"

export default function ToolbarRename(props: ToolbarRenameProps) {
  return <GenericRename noun="Venue" align="end" defaultValue={props.name} onAction={props.onAction} />
}

interface ToolbarRenameProps {
  name: string
  onAction(newName: string): Promise<void>
}
