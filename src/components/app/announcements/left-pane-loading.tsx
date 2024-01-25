import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import LeftPaneContainer from "@/components/ui/left-pane-container"

export default function AnnouncementsLeftPaneLoading() {
  return (
    <LeftPaneContainer>
      <Button variant="ghost" contentAlignment="leading" size="sm" disabled>
        <Icon name="BellPlus" className="mr-2" />
        Create Announcement
      </Button>
    </LeftPaneContainer>
  )
}
