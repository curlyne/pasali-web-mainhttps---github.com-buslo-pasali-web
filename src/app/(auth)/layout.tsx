import Styles from "./layout.module.css";

export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <div className={Styles.container}>
      <div />
      <div className={Styles.content}>
        <div className={Styles.inner}>{children}</div>
      </div>
    </div>
  );
}
