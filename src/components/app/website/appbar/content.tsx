"use client"

import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { isEmpty, last } from "lodash"
import { useRouter, useSelectedLayoutSegments } from "next/navigation"
import { Fragment, useCallback, useMemo } from "react"

export default function AppBarContent(props: AppBarContentProps) {
  const segment = useSelectedLayoutSegments()
  const router = useRouter()

  const value = useMemo(() => {
    if (isEmpty(segment)) {
      return "website"
    }

    return last(segment)
  }, [segment])

  const changePage = useCallback(
    (value: string) => {
      if (value == "website") {
        router.push(`/app/website`)
      } else {
        router.push(`/app/website/${value}`)
      }
    },
    [router],
  )

  return (
    <Fragment>
      <Select value={value} onValueChange={changePage}>
        <SelectTrigger className="w-[220px]">
          <SelectValue placeholder="Select Page" />
        </SelectTrigger>
        <SelectContent>
          {props.list.map((page) => (
            <SelectItem key={page.id} value={page.id}>
              {page.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="flex-grow" />
      <div className="flex flex-row items-center">
        <Button variant="ghost" size="sm">
          <Icon name="ChevronsLeftRight" className="mr-2" />
          Toggle Size
        </Button>
        <Button className="mr-3" variant="ghost" size="sm">
          <Icon name="ExternalLink" className="mr-2" />
          Preview
        </Button>
      </div>
    </Fragment>
  )
}

interface AppBarContentProps {
  list: { id: string; label: string }[]
}
