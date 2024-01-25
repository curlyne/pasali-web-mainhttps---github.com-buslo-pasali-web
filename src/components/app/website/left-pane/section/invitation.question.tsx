"use client"

import FormInvitationQuestionSelect from "@/components/form/invitation.question.select"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Icon } from "@/components/ui/icon"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Section, SectionHeader } from "./_components"

export default function SectionInvitationQuestion() {
  return (
    <Section>
      <SectionHeader title="Question" movable>
        <div className="flex items-center space-x-1 mr-3">
          <label className="text-sm" htmlFor="separateSection">
            Required
          </label>
          <Checkbox id="separateSection" />
        </div>
        <Button size="icon" variant="ghost">
          <Icon name="Trash" />
        </Button>
      </SectionHeader>
      <Label>
        Description
        <Input className="mt-1" />
      </Label>
      <Label>
        Style
        <Select>
          <SelectTrigger className="mt-1">
            <SelectValue>Text</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="text">Text</SelectItem>
              <SelectSeparator />
              <SelectItem value="dropdown">Dropdown</SelectItem>
              <SelectItem value="option">Option</SelectItem>
              <SelectSeparator />
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="time">Time</SelectItem>
              <SelectSeparator />
              <SelectItem value="upload">File Upload</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Label>
      <FormInvitationQuestionSelect />
    </Section>
  )
}
