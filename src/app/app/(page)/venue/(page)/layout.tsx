import SplitView from "@/components/ui/split-view"

export default function VenueLayout(props: VenueLayoutProps) {
  return <SplitView leftChildren={props.leftPane}>{props.children}</SplitView>
}

interface VenueLayoutProps extends React.PropsWithChildren {
  leftPane: React.ReactNode
}
