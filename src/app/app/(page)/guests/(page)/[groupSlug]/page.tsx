import GuestsContent from "@/components/app/guests/content"

export default function GroupSlugPage(props: GroupIdPageProps) {
  return <GuestsContent slug={decodeURI(props.params.groupSlug)} sort={props.searchParams.sort} />
}

interface GroupIdPageProps {
  params: { groupSlug: string }
  searchParams: { sort: string | null }
}
