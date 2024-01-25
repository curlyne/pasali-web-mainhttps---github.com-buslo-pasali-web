import AppNavbar from "@/components/app/navbar"
import { fetchAccess } from "@/lib/domain/app/fetch"
import dynamic from "next/dynamic"
import { Fragment, Suspense } from "react"
import Styles from "./layout.module.css"

const AppDialogs = dynamic(() => import("@/components/app/dialogs"), { ssr: false })

export default async function AppLayout({ children, unauth }: AppLayoutProps) {
  const hasAccess = await fetchAccess()

  return (
    <Fragment>
      <style>{"body { overflow-y: hidden; }"}</style>
      <div className={Styles.container}>
        <AppNavbar {...{ hasAccess }} />
        {hasAccess ? children : unauth}
      </div>
      <Suspense>
        <AppDialogs />
      </Suspense>
    </Fragment>
  )
}

interface AppLayoutProps extends React.PropsWithChildren {
  unauth: React.ReactNode
}
