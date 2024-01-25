import ContentDetails from "@/components/app/announcements/content/details"
import ContentToolbar from "@/components/app/announcements/content/toolbar"
import Styles from "./content.module.css"

export default function AnnouncementsContent(props: AnnouncementsContentProps) {
  return (
    <div className={Styles.container}>
      <ContentToolbar announcementId={props.announcementId} />
      <ContentDetails {...props} />
    </div>
  )
}

interface AnnouncementsContentProps {
  announcementId: number
  content: React.ReactNode
  recipients: React.ReactNode
}
