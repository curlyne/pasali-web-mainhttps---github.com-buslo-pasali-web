"use client"

import Styles from "@/components/app/navbar.module.css"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { filter, first } from "lodash"
import { usePathname, useRouter } from "next/navigation"
import { useCallback, useMemo } from "react"

export default function NavbarMobileSelect({ tabs }: NavbarMobileSelectProps) {
  const path = usePathname()
  const router = useRouter()

  const value = useMemo(() => {
    if (path === "/app") {
      return path
    }

    return /(?<path>\/app\/\S*?)($|\/)/gm.exec(decodeURI(path))?.groups?.path ?? ""
  }, [path])

  const onChange = useCallback(
    (link: string) => {
      const href = first(filter(tabs, (tab) => tab.link === link))?.href

      if (!href) {
        return
      }

      router.push(href)
    },
    [router],
  )

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={Styles.navbarItemMobileContainer}>
        <SelectValue placeholder="Website Tab" />
      </SelectTrigger>
      <SelectContent>
        {tabs.map((item) => (
          <SelectItem key={item.link} value={item.link}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

interface NavbarMobileSelectProps {
  tabs: {
    href: string
    label: string
    link: string
  }[]
}
