interface ContainerProps extends React.PropsWithChildren {
  disabled?: boolean
}

export function Container(props: ContainerProps) {
  return (
    <fieldset className="flex flex-col gap-3" disabled={props.disabled}>
      {props.children}
    </fieldset>
  )
}

export function ContainerInline(props: ContainerProps) {
  return (
    <fieldset className="flex flex-col gap-2" disabled={props.disabled}>
      {props.children}
    </fieldset>
  )
}
