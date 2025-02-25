"use client"
import * as React from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import Image from "next/image"
import { SideNavItem } from "./app-sidebar"
import { HiChevronUpDown } from "react-icons/hi2";
import { useUserSession } from "@/hooks/useUserSession";
import { IoIosLogOut } from "react-icons/io";
import { signOut } from "next-auth/react"
import Link from "next/link"



interface SidebarFooterDash {
    footer: SideNavItem[];
}


const SideMenuFooter: React.FC<SidebarFooterDash> = ({ footer }) => {
    const { isMobile } = useSidebar();
    const session = useUserSession()

    return (
        <SidebarMenu>
            <SidebarMenuItem className="flex items-center">
                <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <Image src={session?.user?.image as string} alt="..." width={30} height={30} className="object-contain rounded-[50%]" />
                                    <div className="flex flex-col">
                                        <p className="text-[10px] font-semibold">{session?.user?.email}</p>
                                        <p className="text-[12px]">{session?.user?.name}</p>
                                    </div>
                                </div>

                                <HiChevronUpDown className="ml-auto" />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                            align="start"
                            side={isMobile ? "bottom" : "right"}
                            sideOffset={4}
                        >
                            <DropdownMenuItem className="flex items-center gap-2">
                                <Image src={session?.user?.image as string} alt="..." width={36} height={36} className="object-contain rounded-[50%]" />
                                <div className="flex flex-col">
                                    <p className="text-[10px] font-semibold truncate">{session?.user?.email}</p>
                                    <p className="text-[12px]">{session?.user?.name}</p>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="w-full bg-gray-300 my-2 mx-auto block" />
                            {footer.map((item, index) => (
                                <Link href={item.link} key={index} >
                                    <DropdownMenuItem className="gap-2 p-2 flex">
                                        {item.logo}
                                        {item.label}
                                    </DropdownMenuItem>
                                </Link>
                            ))}
                            <DropdownMenuSeparator className="w-full bg-gray-300 my-2 mx-auto block" />
                            <DropdownMenuItem className="flex items-center gap-2" onClick={() => signOut()}>
                                <IoIosLogOut className="text-black" />
                                <p className="text-[14px]">Logout</p>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}

export default SideMenuFooter