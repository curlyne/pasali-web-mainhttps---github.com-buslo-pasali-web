import GiftsContentLoading from "@/components/app/gifts/content-loading"
import GiftsLeftPaneLoading from "@/components/app/gifts/left-pane-loading"
import SplitView from "@/components/ui/split-view"

export default function GiftsLoading() {
  return (
    <SplitView leftChildren={<GiftsLeftPaneLoading />}>
      <GiftsContentLoading />
    </SplitView>
  )
}
