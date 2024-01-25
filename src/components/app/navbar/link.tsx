"use client"

import { Button } from "@/components/ui/button"
import { useAppNavbarLink } from "@/lib/domain/navbar/state"
import Link from "next/link"

interface NavbarLinkProps {
  href: string
  link: string
  label: string
}

export default function NavbarLink(props: NavbarLinkProps) {
  const { isSelected } = useAppNavbarLink(props.link)

  return (
    <Button variant={isSelected ? "default" : "link"} contentAlignment="leading" asChild>
      <Link href={props.href}>{props.label}</Link>
    </Button>
  )
}
