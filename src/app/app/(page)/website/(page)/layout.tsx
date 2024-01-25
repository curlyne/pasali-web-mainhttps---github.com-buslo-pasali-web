import AppPageBar from "@/components/app/pagebar"
import WebsiteAppBar from "@/components/app/website/appbar"
import WebsiteLeftPane from "@/components/app/website/left-pane"
import SplitView from "@/components/ui/split-view"
import { fetchWebsiteConfiguration } from "@/lib/domain/website/fetch"
import { WebsiteConfigurationProvider } from "@/lib/domain/website/provider"

interface WebsiteLayoutProps extends React.PropsWithChildren {
  leftPane: React.ReactNode
}

export default async function WebsiteLayout(props: WebsiteLayoutProps) {
  await fetchWebsiteConfiguration()

  return (
    <WebsiteConfigurationProvider>
      <AppPageBar title="Website Style" width="wide">
        <WebsiteAppBar />
      </AppPageBar>
      <SplitView leftChildren={<WebsiteLeftPane>{props.leftPane}</WebsiteLeftPane>} width="wide">
        {props.children}
      </SplitView>
    </WebsiteConfigurationProvider>
  )
}
