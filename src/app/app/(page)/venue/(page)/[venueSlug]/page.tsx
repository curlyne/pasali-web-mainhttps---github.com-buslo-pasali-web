import VenueContent from "@/components/app/venue/content"

export default function VenueSlugPage(props: VenueIdPageProps) {
  return <VenueContent slug={props.params.venueSlug} />
}

interface VenueIdPageProps {
  params: {
    venueSlug: string
  }
}
