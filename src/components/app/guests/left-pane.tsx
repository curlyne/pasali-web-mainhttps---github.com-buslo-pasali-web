import LeftPaneContainer from "@/components/ui/left-pane-container"
import { fetchGuestGroup } from "@/lib/domain/guests/fetch"
import LeftPaneCreate from "./left-pane/create"
import LeftPaneItem from "./left-pane/item"

export default async function GuestsLeftPane() {
  const groups = await fetchGuestGroup()

  return (
    <LeftPaneContainer>
      <LeftPaneCreate />
      {groups.map((group) => (
        <LeftPaneItem key={group.slug} firstSlug={groups[0].slug} {...{ group }} />
      ))}
    </LeftPaneContainer>
  )
}
