import GiftsLeftPane from "@/components/app/gifts/left-pane"
import SplitView from "@/components/ui/split-view"

export default function GiftsLayout(props: GiftsLayoutProps) {
  return <SplitView leftChildren={<GiftsLeftPane />}>{props.children}</SplitView>
}

interface GiftsLayoutProps extends React.PropsWithChildren {}
