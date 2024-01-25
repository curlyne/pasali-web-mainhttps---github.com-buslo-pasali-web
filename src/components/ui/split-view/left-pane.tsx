"use client"

import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { classes, whenTrue } from "@/lib/utils"
import { Fragment, useCallback, useState } from "react"
import Styles from "../split-view.module.css"

export default function SplitViewLeftPane({ children }: SplitViewLeftPaneProps) {
  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => setOpen((current) => !current), [])

  return (
    <Fragment>
      <div className={classes(Styles.leftPane, whenTrue(open, Styles.opened))}>
        <div className={Styles.scroller}>{children}</div>
      </div>
      <Button className={Styles.visibility} variant={open ? "default" : "outline"} size="icon" onClick={toggle}>
        <Icon name={open ? "PanelLeftClose" : "PanelLeftOpen"} />
      </Button>
    </Fragment>
  )
}

interface SplitViewLeftPaneProps extends React.PropsWithChildren {}
