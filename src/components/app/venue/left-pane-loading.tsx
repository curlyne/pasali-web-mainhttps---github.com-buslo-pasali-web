import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import LeftPaneContainer from "@/components/ui/left-pane-container"

export default function VenueLeftPaneLoading() {
  return (
    <LeftPaneContainer>
      <Button contentAlignment="leading" className="mb-2" variant="ghost" size="sm" disabled>
        <Icon name="PlusSquare" className="mr-2" />
        Create Venue
      </Button>
    </LeftPaneContainer>
  )
}
