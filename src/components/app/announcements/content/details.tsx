"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Styles from "./details.module.css"

export default function ContentDetails(props: ContentDetailsProps) {
  const pathname = usePathname()
  const [tab, setTab] = useState(pathname.endsWith("recipients") ? "recipients" : "content")

  return (
    <Tabs className={Styles.container} value={tab} onValueChange={setTab}>
      <div className="flex flex-row">
        <TabsList>
          <TabsTrigger value="content" asChild>
            <Link href={`/app/announcements/${props.announcementId}`}>Content</Link>
          </TabsTrigger>
          <TabsTrigger value="recipients" asChild>
            <Link href={`/app/announcements/${props.announcementId}/recipients`}>Recipients</Link>
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="content">{props.content}</TabsContent>
      <TabsContent value="recipients">{props.recipients}</TabsContent>
    </Tabs>
  )
}

interface ContentDetailsProps {
  announcementId: number
  content: React.ReactNode
  recipients: React.ReactNode
}
