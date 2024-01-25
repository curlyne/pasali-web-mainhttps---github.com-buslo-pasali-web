import Styles from "./toolbar.module.css"

interface ToolbarProps extends React.PropsWithChildren {
  disabled?: boolean
  title?: string
}

export function Toolbar(props: ToolbarProps) {
  return (
    <fieldset className={Styles.container} disabled={props.disabled}>
      {props.title && (
        <div className="grid md:hidden place-items-center select-none">
          <h3 className="text-base font-bold">{props.title}</h3>
        </div>
      )}
      <div className="flex-grow" />
      {props.children}
    </fieldset>
  )
}
