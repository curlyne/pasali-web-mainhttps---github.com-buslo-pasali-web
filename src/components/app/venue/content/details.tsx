import DetailsAddress from "@/components/app/venue/content/details/address"
import DetailsInformation from "@/components/app/venue/content/details/information"
import { VenueContent } from "@/lib/domain/venue/fetch"
import Styles from "./details.module.css"

export default function ContentDetails(props: ContentDetailsProps) {
  return (
    <div className={Styles.container}>
      <DetailsAddress />
      <DetailsInformation />
    </div>
  )
}

interface ContentDetailsProps {
  venue: VenueContent
}
