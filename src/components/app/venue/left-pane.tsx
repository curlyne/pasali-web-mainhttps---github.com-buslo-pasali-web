import LeftPaneCreate from "@/components/app/venue/left-pane/create"
import LeftPaneItem from "@/components/app/venue/left-pane/item"
import LeftPaneContainer from "@/components/ui/left-pane-container"
import { fetchVenue } from "@/lib/domain/venue/fetch"

export default async function VenueLeftPane() {
  const venues = await fetchVenue()

  return (
    <LeftPaneContainer>
      <LeftPaneCreate />
      {venues.map((venue) => (
        <LeftPaneItem key={venue.slug} firstSlug={venues[0].slug} venue={venue} />
      ))}
    </LeftPaneContainer>
  )
}
