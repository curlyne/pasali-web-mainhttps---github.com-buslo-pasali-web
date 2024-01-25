import { Card } from "@/components/ui/card"
import { Icon } from "@/components/ui/icon"

interface SectionHeaderProps extends React.PropsWithChildren {
  title: string
  movable?: boolean
}

export function Section(props: React.PropsWithChildren) {
  return <Card className="flex flex-col gap-4 p-4 select-none">{props.children}</Card>
}

export function SectionHeader(props: SectionHeaderProps) {
  return (
    <div className="flex flex-row gap-1 items-center">
      {props.movable && <Icon name="GripVertical" className="-ml-1 cursor-grab" />}
      <h4 className="font-semibold flex-grow">{props.title}</h4>
      <div className="flex flex-row items-center -my-2">{props.children}</div>
    </div>
  )
}
