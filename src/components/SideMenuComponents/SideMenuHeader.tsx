"use client"
import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import logo from '../../asset/unolologo.png'
import Image from "next/image"
import { HiChevronUpDown } from "react-icons/hi2";
import { Team } from "./app-sidebar"

interface SideMenuHeaderProps {
  teams: Team[];
}


const SideMenuHeader: React.FC<SideMenuHeaderProps> = ({ teams }) => {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [open, setOpen] = React.useState(false);

  const handleSelectTeam = (team: Team) => {
    setActiveTeam(team);
    setOpen(false);
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex items-center">
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
            <Image src={logo} alt="..." className="object-contain" />
          </div>
          <div className="grid flex-1 text-left text-xl font-semibold leading-tight">
            <p className="font-semibold">Unolo</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-2">
                <p>{activeTeam.label}</p>
                <HiChevronUpDown className="ml-auto" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">Teams</DropdownMenuLabel>
            {teams.map((team, index) => (
              <DropdownMenuItem key={index}  onClick={() => handleSelectTeam(team)} className="gap-2 p-2">
                {team.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

export default SideMenuHeader