import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import LeftPaneContainer from "@/components/ui/left-pane-container"

export default async function GiftsLeftPaneLoading() {
  return (
    <LeftPaneContainer>
      <Button variant="ghost" className="mb-2" contentAlignment="leading" size="sm" disabled>
        <Icon name="PlusSquare" className="mr-2" />
        Create Gift
      </Button>
    </LeftPaneContainer>
  )
}
