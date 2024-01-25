"use client"

import { Button } from "@/components/ui/button"
import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useManageEventsVisibility } from "@/lib/domain/manage-events/state"

export default function ManageEventsContent() {
  const { hide: hideAccounts } = useManageEventsVisibility()

  return (
    <DialogContent className="py-4 px-4 flex flex-col">
      <DialogHeader>
        <DialogTitle>Manage Events</DialogTitle>
      </DialogHeader>
      <div className="min-w-[400px] min-h-[320px]"></div>
      <DialogFooter className="flex flex-row-reverse">
        <Button variant="secondary" size="sm" onClick={hideAccounts}>
          Cancel
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}
