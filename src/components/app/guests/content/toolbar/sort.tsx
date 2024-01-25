"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icon } from "@/components/ui/icon"
import { useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

interface ToolbarSortProps {}

export default function ToolbarSort(props: ToolbarSortProps) {
  const params = useSearchParams()
  const router = useRouter()

  const setSorting = useCallback(
    (sort: string) => () => {
      router.push(`?sort=${sort}`)
    },
    [router],
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <Icon className="md:mr-2" name="ArrowUpDown" />
          <span className="hidden md:block">Sort</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={params.get("sort") ?? "name"}>
          <DropdownMenuRadioItem value="name" onClick={setSorting("name")}>
            Name
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="status" onClick={setSorting("status")}>
            Status
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="plus-one" onClick={setSorting("plus-one")}>
            Plus One Count
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
