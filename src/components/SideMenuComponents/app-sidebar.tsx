import type * as React from "react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar"
import SideMenuHeader from "./SideMenuHeader"
import { MdDashboard, MdOutlineCalendarMonth, MdOutlineCalendarToday, MdOutlineTask, MdFormatAlignJustify } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { RiTruckLine } from "react-icons/ri";
import { HiOutlineCash } from "react-icons/hi";
import { TbUsers } from "react-icons/tb";
import { BiSolidReport } from "react-icons/bi";
import SideMenuContent from "./SideMenuContent";
import { CiMoneyBill } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import SideMenuFooter from "./SideMenuFooter";


export interface Team {
  label: string,
}

export interface SideNavItem {
  logo: React.ReactNode;
  label: string;
  link:string;
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const teams: Team[] = [
    { label: 'Professional' },
    { label: 'Student' },
    { label: 'Personal' },
    { label: 'Public' }
  ];

  const sideNav: SideNavItem[] = [
    { logo: <MdDashboard />, label: "Dashboard", link:'/' },
    { logo: <MdOutlineCalendarMonth />, label: "Attendance", link:'/attendance' },
    { logo: <MdOutlineCalendarToday />, label: "Leaves", link:'/leaves' },
    { logo: <FaRegUser />, label: "Organization", link:'/organization' },
    { logo: <MdOutlineTask />, label: "Tasks", link:'/task' },
    { logo: <MdFormatAlignJustify />, label: "Form", link:'/form' },
    { logo: <RiTruckLine />, label: "Order", link:'/order' },
    { logo: <HiOutlineCash />, label: "Expenses", link:'/expenses' },
    { logo: <TbUsers />, label: "Clients & Sites", link:'/client-site' },
    { logo: <BiSolidReport />, label: "Reports", link:'/reports' },
  ];

  const FooterDash: SideNavItem[] = [
    { logo: <MdOutlineAccountCircle />, label: "Account", link:'/account' },
    { logo: <IoSettingsOutline />, label: "Setting", link:'/setting' },
    { logo: <CiMoneyBill />, label: "Billing", link:'/bill' },
  ]

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SideMenuHeader teams={teams} />
      </SidebarHeader>
      <SidebarContent>
        <SideMenuContent menu={sideNav} />
      </SidebarContent>
      <SidebarFooter>
        <SideMenuFooter footer={FooterDash} />
      </SidebarFooter>
    </Sidebar>
  )
}

