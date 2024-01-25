"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useMap } from "@/components/ui/map"

export default function DetailsAddress() {
  const { container } = useMap()

  return (
    <Card>
      <CardHeader className="font-semibold">Address</CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Input type="address" />
        <div
          className="w-full rounded-md bg-white border relative text-black"
          style={{ height: "300px" }}
          ref={container}
        />
      </CardContent>
      <CardFooter className="flex flex-row gap-2">
        <Button variant="secondary" size="sm">
          Confirm
        </Button>
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
      </CardFooter>
    </Card>
  )
}
