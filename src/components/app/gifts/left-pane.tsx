import LeftPaneCreate from "@/components/app/gifts/left-pane/create"
import LeftPaneItem from "@/components/app/gifts/left-pane/item"
import LeftPaneContainer from "@/components/ui/left-pane-container"
import { fetchGifts } from "@/lib/domain/gifts/fetch"

export default async function GiftsLeftPane() {
  const gifts = await fetchGifts()

  return (
    <LeftPaneContainer>
      <LeftPaneCreate />
      {gifts.map((gift) => (
        <LeftPaneItem key={gift.slug} {...{ gift }} />
      ))}
    </LeftPaneContainer>
  )
}
