import GuestsContentIntro from "@/components/app/guests/content-intro"

export default async function GuestsPage({ searchParams }: GuestsPageProps) {
  return <GuestsContentIntro />
}

interface GuestsPageProps {
  searchParams: { sort: string | null }
}
