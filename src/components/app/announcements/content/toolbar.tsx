import ToolbarPublish from "@/components/app/announcements/content/toolbar/publish"
import ToolbarRename from "@/components/app/announcements/content/toolbar/rename"
import ToolbarUnpublish from "@/components/app/announcements/content/toolbar/unpublish"
import { Toolbar } from "@/components/ui/toolbar"

export default function ContentToolbar(props: ContentToolbarProps) {
  return (
    <Toolbar>
      <ToolbarRename />
      <ToolbarPublish />
      <ToolbarUnpublish />
    </Toolbar>
  )
}

interface ContentToolbarProps {
  announcementId: number
}
