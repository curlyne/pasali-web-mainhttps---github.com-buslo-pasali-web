import { redirect } from "next/navigation"

export default function UnauthDefault() {
  redirect("/app")
}
