import Styles from "./_components.module.css";

export default function Content(props: React.PropsWithChildren) {
  return <div className={Styles.container}>{props.children}</div>;
}
