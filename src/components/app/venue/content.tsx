import ContentDetails from "@/components/app/venue/content/details"
import ContentToolbar from "@/components/app/venue/content/toolbar"
import { fetchVenueContent } from "@/lib/domain/venue/fetch"
import Styles from "./content.module.css"

export default async function VenueContent(props: VenueContentProps) {
  const venue = await fetchVenueContent(props.slug)

  return (
    <div className={Styles.container}>
      <ContentToolbar venueSlug={props.slug} venueName={venue.name} />
      <ContentDetails venue={venue} />
    </div>
  )
}

interface VenueContentProps {
  slug: string
}
