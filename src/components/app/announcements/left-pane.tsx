import LeftPaneCreate from "@/components/app/announcements/left-pane/create"
import LeftPaneItem from "@/components/app/announcements/left-pane/item"
import LeftPaneContainer from "@/components/ui/left-pane-container"
import { fetchAnnouncementList } from "@/lib/domain/announcement/fetch"

export default async function AnnouncementsLeftPane() {
  const announcements = await fetchAnnouncementList()

  return (
    <LeftPaneContainer>
      <LeftPaneCreate />
      {announcements.map((announcement) => (
        <LeftPaneItem key={announcement.id} firstId={announcements[0].id} {...{ announcement }} />
      ))}
    </LeftPaneContainer>
  )
}
