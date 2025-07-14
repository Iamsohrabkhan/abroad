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

export function TabsCariers() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <button className="min-w-36 min-h-12 rounded-full cursor-pointer border border-accent inline-flex justify-center items-center">Carriers <ChevronDownIcon /></button>
      </DropdownMenuTrigger >
      <DropdownMenuContent className="w-56 cursor-pointer" >
        <DropdownMenuLabel>Select Carrier</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="Airline 1">Airline 1</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Airline 2">Airline 2</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Airline 3">Airline 3</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
