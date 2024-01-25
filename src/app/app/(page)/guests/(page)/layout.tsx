import SplitView from "@/components/ui/split-view"

interface GuestsLayoutProps extends React.PropsWithChildren {
  leftPane: React.ReactNode
}

export default function GuestsLayout(props: GuestsLayoutProps) {
  return <SplitView leftChildren={props.leftPane}>{props.children}</SplitView>
}
