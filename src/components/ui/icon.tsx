import { icons, LucideProps } from "lucide-react"

interface IconProps extends LucideProps {
  name: keyof typeof icons
}

export function Icon(props: IconProps) {
  const TheIcon = icons[props.name]
  return (
    <div className={`w-[${props.size ?? 16}px] h-[${props.size ?? 16}px] ` + (props.className ?? "")}>
      <TheIcon size={props.size ?? 16} strokeWidth={1.5} />
    </div>
  )
}
