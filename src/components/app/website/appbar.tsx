import AppBarContent from "@/components/app/website/appbar/content";
import { fetchWebsiteTabs } from "@/lib/domain/website/fetch";

export default async function WebsiteAppBar() {
  const list = await fetchWebsiteTabs();

  return <AppBarContent list={list} />;
}
