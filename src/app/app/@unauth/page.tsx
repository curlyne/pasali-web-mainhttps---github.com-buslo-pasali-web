import UnAuthContent from "@/components/app/unauth/content"
import { fetchDomain } from "@/lib/domain/app/fetch"

export default async function UnAuthPage() {
  const domain = await fetchDomain()

  return <UnAuthContent eventName={domain.name} />
}
