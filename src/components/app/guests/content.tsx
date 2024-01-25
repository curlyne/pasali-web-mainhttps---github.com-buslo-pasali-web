import ContentItem from "@/components/app/guests/content/item"
import ContentToolbar from "@/components/app/guests/content/toolbar"
import { fetchGuestGroupContent } from "@/lib/domain/guests/fetch"
import Styles from "./content.module.css"

export default async function GuestsContent(props: GuestsContentProps) {
  const guestGroup = await fetchGuestGroupContent(props.slug, props.sort)

  return (
    <div className={Styles.container}>
      <ContentToolbar groupName={guestGroup.name} groupSlug={props.slug} />
      <div className={Styles.content}>
        {guestGroup.guests.map((guest) => (
          <ContentItem key={guest.id} groupSlug={props.slug} guest={guest} />
        ))}
      </div>
    </div>
  )
}

interface GuestsContentProps {
  slug: string
  sort: string | null
}
