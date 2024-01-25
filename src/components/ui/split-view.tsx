import SplitViewLeftPane from "@/components/ui/split-view/left-pane"
import { classes, whenTrue } from "@/lib/utils"
import Styles from "./split-view.module.css"

interface SplitViewProps extends React.PropsWithChildren {
  leftChildren: React.ReactNode
  width?: "wide"
}

export default function SplitView({ leftChildren, children, width }: SplitViewProps) {
  return (
    <div className={classes(Styles.container, whenTrue(width == "wide", Styles.wide))}>
      <SplitViewLeftPane>{leftChildren}</SplitViewLeftPane>
      <div className={Styles.content}>
        <div className={Styles.scroller}>{children}</div>
      </div>
    </div>
  )
}
