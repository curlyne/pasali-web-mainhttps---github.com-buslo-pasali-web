"use client"

import ContentAppearance from "@/components/app/settings/content/appearance"
import { Button } from "@/components/ui/button"
import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSettingsVisibility } from "@/lib/domain/settings/state"

export default function SettingsContent() {
  const { hide: hideSettings } = useSettingsVisibility()

  return (
    <DialogContent className="py-4 px-4 flex flex-col">
      <DialogHeader>
        <DialogTitle>Settings</DialogTitle>
      </DialogHeader>
      <Tabs className="min-h-[420px]">
        <TabsList className="mb-3">
          <TabsTrigger value="event">This Event</TabsTrigger>
          <TabsTrigger value="account">Your Account</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>
        <TabsContent value="appearance">
          <ContentAppearance />
        </TabsContent>
      </Tabs>
      <DialogFooter className="flex flex-row-reverse">
        <Button variant="secondary" size="sm" onClick={hideSettings}>
          Close
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}
