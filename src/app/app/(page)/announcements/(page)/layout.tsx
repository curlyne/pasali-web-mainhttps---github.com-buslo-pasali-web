import AnnouncementsLeftPane from "@/components/app/announcements/left-pane"
import SplitView from "@/components/ui/split-view"

export default function AnnouncementsLayout(props: AnnouncementsLayoutProps) {
  return <SplitView leftChildren={<AnnouncementsLeftPane />}>{props.children}</SplitView>
}

interface AnnouncementsLayoutProps extends React.PropsWithChildren {}
