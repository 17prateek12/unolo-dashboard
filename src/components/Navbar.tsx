"use client";
import { useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { MdOutlineMessage, MdOutlineNotificationsNone } from "react-icons/md";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SignOutButton from "./SignOutButton";
import { Button } from "./ui/button";
import { RiBarChartFill } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { CiLocationOff } from "react-icons/ci";
import { RiBankCard2Fill } from "react-icons/ri";
import { CiCircleAlert } from "react-icons/ci";
import { RiMapPinUserFill } from "react-icons/ri";
import { useUserSession } from "@/hooks/useUserSession";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Navmenu {
    logo: React.ReactNode,
    label: string,
    link: string,
}


export default function Navbar() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const session = useUserSession()

    const pathname = usePathname(); 

    

    const navbarmenu: Navmenu[] = [
        { logo: <RiBarChartFill />, label: 'Overview', link: '/' },
        { logo: <IoLocationOutline />, label: 'live Location', link: '/dashboard/location' },
        { logo: <CiLocationOff />, label: 'Timeline', link: '/dashboard/time-line' },
        { logo: <RiBankCard2Fill />, label: 'Card View', link: '/dashboard/card' },
        { logo: <CiCircleAlert />, label: 'Compliance Status', link: '/dashboard/status' },
        { logo: <RiMapPinUserFill />, label: 'Site Attendance', link: '/dashboard/attendance' },
    ];

    return (
        <header
            className={`fixed top-0 h-[80px] shadow-md flex items-center justify-between transition-all duration-150 
             ${isSidebarCollapsed ? "w-full sm:w-[calc(100%-50px)]" : "w-full sm:w-[calc(100%-250px)]"}
            ease-linear transition-[width,height] flex-col bg-white z-[100] pl-4`}
        >
            <div className="flex items-center justify-between w-full px-4 h-9">
                <SidebarTrigger onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />
                <div className="flex items-center gap-4 ml-auto flex-wrap max-w-[60%] sm:max-w-none">
                    <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                        <MdOutlineMessage />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center relative">
                        <MdOutlineNotificationsNone />
                        <span className="text-[10px] font-bold -mt-4 ml-6 absolute text-red-500">
                            99
                        </span>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="h-8 w-8 px-0 sm:px-4 sm:w-auto sm:rounded-full rounded-2xl flex items-center justify-center gap-2 bg-white overflow-hidden">
                                <Image src={session?.user?.image as string} alt="..." width={24} height={24} className="object-contain rounded-[50%]" />
                                <span className="text-[14px] sm:block hidden">
                                    {session?.user?.email}
                                </span>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="w-auto px-16 py-8 flex items-center justify-center flex-col">
                            <SignOutButton />
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div className="w-full h-9 flex justify-start items-center gap-2 bottom-0 overflow-scroll xl:overflow-auto mx-4">
                {navbarmenu.map((item, index) => {
                    const isActive = pathname === item.link;
                    return (
                        <Link href={item.link}
                            key={index}>
                            <Button
                                className={`flex justify-center items-center gap-2 px-4 py-2 bg-transparent font-medium text-[14px] text-black 
                shadow-none rounded-tr-xl rounded-tl-xl rounded-br-none hover:bg-blue-300 rounded-bl-none bg-white ${isActive
                                        ? "bg-blue-500 text-white"
                                        : "text-gray-700 hover:bg-blue-300"
                                    }
                `}>
                                {item.logo}
                                <p>{item.label}</p>
                            </Button>
                        </Link>
                    )
                })}
            </div>
        </header>
    );
}
