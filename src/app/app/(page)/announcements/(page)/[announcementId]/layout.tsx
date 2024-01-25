import AnnouncementsContent from "@/components/app/announcements/content"
import { toNumber } from "lodash"

export default function AnnouncementLayout({ params, ...content }: AnnouncementIdPageProps) {
  return <AnnouncementsContent announcementId={toNumber(params.announcementId)} {...content} />
}

interface AnnouncementIdPageProps {
  content: React.ReactNode
  recipients: React.ReactNode
  params: {
    announcementId: string
  }
}
