import AnnouncementsContentLoading from "@/components/app/announcements/content-loading"
import AnnouncementsLeftPaneLoading from "@/components/app/announcements/left-pane-loading"
import SplitView from "@/components/ui/split-view"

export default function AnnouncementsLoading() {
  return (
    <SplitView leftChildren={<AnnouncementsLeftPaneLoading />}>
      <AnnouncementsContentLoading />
    </SplitView>
  )
}
