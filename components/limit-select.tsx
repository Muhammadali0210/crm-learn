import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export interface LimitSelectProps {
  limit: number
  onLimitChange: (limit: number) => void
}

export function LimitSelect({
  limit,
  onLimitChange
}: LimitSelectProps) {
  const handleChange = (value: string) => {
    onLimitChange(parseInt(value, 10))
  }

  return (
    <Select defaultValue={limit.toString()} onValueChange={handleChange}>
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder="Select">{limit.toString()}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select</SelectLabel>
          <SelectItem value="2">
            2
          </SelectItem>
          <SelectItem value="5">
            5
          </SelectItem>
          <SelectItem value="8">
            8
          </SelectItem>
          <SelectItem value="10">
            10
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

