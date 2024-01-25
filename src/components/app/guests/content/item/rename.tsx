import GenericRename from "@/components/form/generic-rename"

export default function ItemRename(props: ItemRenameProps) {
  return (
    <GenericRename
      noun="Guest"
      align="end"
      defaultValue={props.guestName}
      inputProps={{ placeholder: "Guest Name" }}
      onAction={props.onAction}
      iconOnly
    />
  )
}

interface ItemRenameProps {
  guestName: string
  onAction(newName: string): Promise<void>
}
