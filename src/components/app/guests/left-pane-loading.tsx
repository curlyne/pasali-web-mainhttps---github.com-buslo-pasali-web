import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import LeftPaneContainer from "@/components/ui/left-pane-container"

export default async function GuestsLeftPaneLoading() {
  return (
    <LeftPaneContainer>
      <fieldset disabled>
        <Button contentAlignment="leading" className="w-full" variant="ghost" size="sm" type="button">
          <Icon name="PlusSquare" className="mr-2" />
          Create Group
        </Button>
      </fieldset>
    </LeftPaneContainer>
  )
}
