"use client"

import ItemDelete from "@/components/app/guests/content/item/delete"
import ItemRename from "@/components/app/guests/content/item/rename"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Guest } from "@/lib/domain/guests/fetch"
import { useGuestItem } from "@/lib/domain/guests/state"
import Styles from "./item.module.css"

interface ContentItemProps {
  groupSlug: string
  guest: Guest
}

export default function ContentItem({ groupSlug, guest }: ContentItemProps) {
  const { delete: deleteGuest, update: updateGuest } = useGuestItem(decodeURI(groupSlug), guest.id)

  return (
    <Card className={Styles.container}>
      <div className={Styles.content}>
        <div className="flex flex-row gap-2 items-center">
          <Badge variant="secondary" className="text-xs w-[90px]">
            Pending
          </Badge>
          <div className="flex-col hidden md:flex">
            <h4 className="text-sm">{guest.name}</h4>
          </div>
        </div>
        <div className="flex-grow" />
        <div className="flex flex-row">
          <ItemRename onAction={updateGuest} guestName={guest.name} />
          <ItemDelete onAction={deleteGuest} />
        </div>
      </div>
      <div className={Styles.details}>
        <h4 className="text-md">{guest.name}</h4>
      </div>
    </Card>
  )
}
