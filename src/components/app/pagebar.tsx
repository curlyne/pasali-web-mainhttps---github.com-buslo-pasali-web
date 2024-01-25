import { classes, whenTrue } from "@/lib/utils";
import Styles from "./pagebar.module.css";

export default function AppPageBar(props: AppPageBarProps) {
  if (props.children) {
    return (
      <div
        className={classes(
          Styles.containerSplit,
          whenTrue(props.width === "wide", Styles.wide),
        )}
      >
        <div className={Styles.leftPane}>
          <h3>{props.title}</h3>
        </div>
        <div className={Styles.content}>{props.children}</div>
      </div>
    );
  } else {
    return (
      <div className={Styles.container}>
        <h3>{props.title}</h3>
      </div>
    );
  }
}

interface AppPageBarProps extends React.PropsWithChildren {
  title: string;
  width?: "wide";
}
