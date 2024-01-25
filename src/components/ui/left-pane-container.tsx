export default function LeftPaneContainer(props: LeftPaneContainerProps) {
  return <div className="flex flex-col p-2 pt-3">{props.children}</div>
}

interface LeftPaneContainerProps extends React.PropsWithChildren {}
