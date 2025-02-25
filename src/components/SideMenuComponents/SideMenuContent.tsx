"use client";

import React from 'react'
import { usePathname } from 'next/navigation'
import { SideNavItem } from './app-sidebar'
import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from 'next/link'

interface SideMenuProps {
    menu: SideNavItem[];
}

const SideMenuContent: React.FC<SideMenuProps> = ({ menu }) => {
    const pathname = usePathname(); 

    return (
        <SidebarGroup>
            <SidebarMenu>
                {menu.map((item, index) => {
                    const isActive = pathname === item.link;

                    return (
                        <SidebarMenuItem key={index}>
                            <Link href={item.link}>
                                <SidebarMenuButton
                                    tooltip={item.label}
                                    className={`flex items-center my-2 gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
                                        isActive 
                                            ? "bg-blue-500 text-white"
                                            : "text-gray-700 hover:bg-blue-300" 
                                    } hover:bg-blue-300`}
                                >
                                    {item.logo}
                                    <p>{item.label}</p>
                                </SidebarMenuButton>
                            </Link>
                        </SidebarMenuItem>
                    )
                })}
            </SidebarMenu>
        </SidebarGroup>
    )
}

export default SideMenuContent
