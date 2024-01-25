import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import IconBlank from "@/components/ui/icon-blank"
import Link from "next/link"

export default function LeftPaneButton(props: LeftPaneItemProps) {
  return (
    <Button
      contentAlignment="leading"
      className="w-full cursor-pointer"
      variant={props.selected ? "default" : "link"}
      size="sm"
      asChild
    >
      <Link href={props.href}>
        {props.selected ? <Icon name="ChevronRight" className="mr-2" /> : <IconBlank className="mr-2" />}
        {props.children}
      </Link>
    </Button>
  )
}

interface LeftPaneItemProps extends React.PropsWithChildren {
  href: string
  selected: boolean
}
