import NavbarDesktopSelect from "@/components/app/navbar/desktop-select"
import NavbarMobileSelect from "@/components/app/navbar/mobile-select"
import { sometypeMono } from "@/components/fonts"
import { fetchAppNavbar } from "@/lib/domain/navbar/fetch"
import { Fragment } from "react"
import Styles from "./navbar.module.css"
import NavbarAvatar from "./navbar/avatar"

export default async function AppNavbar(props: AppNavbarProps) {
  const { tabs } = await fetchAppNavbar()

  return (
    <div className={Styles.container}>
      <div className={Styles.logo}>
        <h2 className={sometypeMono.className}>pasali</h2>
      </div>
      {props.hasAccess && (
        <Fragment>
          <NavbarDesktopSelect tabs={tabs} />
          <NavbarMobileSelect tabs={tabs} />
          <div className="flex-grow" />
          <NavbarAvatar />
        </Fragment>
      )}
    </div>
  )
}

interface AppNavbarProps {
  hasAccess: boolean
}
