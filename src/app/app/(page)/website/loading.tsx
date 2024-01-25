import AppPageBar from "@/components/app/pagebar"
import SplitView from "@/components/ui/split-view"
import { Fragment } from "react"

export default function WebsiteLoading() {
  return (
    <div className="grid grid-rows-app-page">
      <AppPageBar title="Website Style" width="wide">
        <Fragment />
      </AppPageBar>
      <SplitView leftChildren={<Fragment />} width="wide" />
    </div>
  )
}
