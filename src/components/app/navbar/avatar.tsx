"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icon } from "@/components/ui/icon"
import { useManageEventsVisibility } from "@/lib/domain/manage-events/state"
import { useSettingsVisibility } from "@/lib/domain/settings/state"
import { performLogout } from "@/lib/domain/unauth/action"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

export default function NavbarAvatar() {
  const router = useRouter()

  const { show: showSettings } = useSettingsVisibility()
  const { show: showAccounts } = useManageEventsVisibility()

  const logout = useCallback(() => {
    performLogout().then(() => router.refresh())
  }, [router])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none" asChild>
        <Button className="aspect-square" variant="ghost" size="icon">
          <Icon name="MoreHorizontal" size={24} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuItem onClick={showSettings}>
          <Icon name="Settings" className="mr-2" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger inset>Events</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="w-[200px]">
              <DropdownMenuItem inset onClick={showAccounts}>
                Manage Events
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value="this">
                <DropdownMenuRadioItem value="this">This Event</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="that">That Event</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem onClick={showSettings}>
          <Icon name="MessageCircleQuestion" className="mr-2" />
          Help and Support
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem inset onClick={logout}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
