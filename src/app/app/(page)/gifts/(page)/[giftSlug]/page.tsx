import GiftsContent from "@/components/app/gifts/content"

export default function GiftSlugPage({ params }: AnnouncementIdPageProps) {
  return <GiftsContent />
}

interface AnnouncementIdPageProps {
  params: {
    giftSlug: string
  }
}
