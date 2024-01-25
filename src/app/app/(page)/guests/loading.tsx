import GuestsContentLoading from "@/components/app/guests/content-loading"
import GuestsLeftPaneLoading from "@/components/app/guests/left-pane-loading"
import SplitView from "@/components/ui/split-view"

export default function GuestsLoading() {
  return (
    <SplitView leftChildren={<GuestsLeftPaneLoading />}>
      <GuestsContentLoading />
    </SplitView>
  )
}
