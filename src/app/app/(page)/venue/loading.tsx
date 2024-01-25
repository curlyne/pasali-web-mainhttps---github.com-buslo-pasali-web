import VenueContentLoading from "@/components/app/venue/content-loading"
import VenueLeftPaneLoading from "@/components/app/venue/left-pane-loading"
import SplitView from "@/components/ui/split-view"

export default function VenueLoading() {
  return (
    <SplitView leftChildren={<VenueLeftPaneLoading />}>
      <VenueContentLoading />
    </SplitView>
  )
}
