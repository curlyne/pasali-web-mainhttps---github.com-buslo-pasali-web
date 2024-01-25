import Styles from "./left-pane.module.css";

interface WebsiteLeftPaneProps extends React.PropsWithChildren {}

export default async function WebsiteLeftPane(props: WebsiteLeftPaneProps) {
  return <div className={Styles.websiteTabContent}>{props.children}</div>;
}
