"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from "lucide-react"

export function Prices() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu  >
      <DropdownMenuTrigger asChild>
        <button className="min-w-36 min-h-12 rounded-full cursor-pointer border border-accent inline-flex justify-center items-center">All Prices <ChevronDownIcon /></button>
      </DropdownMenuTrigger >
      <DropdownMenuContent className="w-56 cursor-pointer" >
        <DropdownMenuLabel>Select Price</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="$55">$55</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="$65">$65</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="$32">$32</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
