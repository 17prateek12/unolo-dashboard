import React from 'react'
import Dropdown from '@/components/Dropdown';
import { IoSearch } from "react-icons/io5";
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface Employees {
    name: string,
    status: string,
    location: string,
}
const EmployeeTable = () => {

    const empldata: Employees[] = [
        {
            name: "Kumar Viswas",
            status: "Never Marked Attendance",
            location: "NA"
        },
        {
            name: "Mayur Tyagi",
            status: "<b>Punched In </b>: Today at 5:14 PM <br/> <b>From</b> :Unolo",
            location: "514 The Palm Springs Plaza, Golf Course Rd, DLF Phase 5, Sector 54, Gurugram <br/> 7 hours ago"
        },
        {
            name: "Mohan Bishnoi <br /> (123)",
            status: "<b>Punched Out</b> : 19-12-2024",
            location: "Vikas Marg, South City II, Sector 49, Gurugram <br /> 2 months ago"
        },
        {
            name: "OM BHAGWAN",
            status: "<b>Punched In</>b: Today at 4:27 PM <br /> <b>From</b>: Unolo",
            location: "514 The Palm Springs Plaza, Golf Course Rd, DLF Phase 5, Sector 54, Gurugram <br /> 7 hours ago"
        },
        {
            name: "Pranav Jadli <br /> (0012)",
            status: "<b>Punched Out</b>: 24-12-2024",
            location: "514 The Palm Springs Plaza, Golf Course Rd, DLF Phase 5, Sector 54, Gurugram <br /> 2 months ago"
        },
        {
            name: "Rahul Singh",
            status: "<b>Punched Out</b>: Today at 7:30 AM",
            location: "Sector 46, Gurugram <br /> 16 hours ago"
        }
    ]


    return (
        <div className='w-full h-full flex flex-col bg-white xl:px-4 px-2 py-2 rounded-lg'>
            <div className='w-full flex items-center flex-wrap'>
                <p className='xl:text-xl md:text-[14px] text-[12px] font-bold flex items-center gap-2 text-left'>Employees{" "}({empldata.length})</p>
                <div className='w-[120px] flex justify-between items-center gap-2 ml-auto'>
                    <p>All</p>
                    <Dropdown options={["All", "New", "Old", "Ex"]} />
                </div>
                <div className='max-w-full w-full my-2 h-[2rem] rounded-lg relative flex items-center ml-auto'>
                    <IoSearch className='absolute ml-2' />
                    <Input type='text' placeholder='Search Here' className='w-full h-full bg-gray-50 pl-6 border border-gray-400 focus:outline-none' />
                </div>
            </div>
            <hr className='w-full bg-gray-400 mx-auto my-2' />
            <Table className='w-full flex flex-col mt-4 overflow-y-scroll'>
                <TableHeader>
                    <TableRow className='w-full flex items-center'>
                    <TableHead className='w-1/3'>Employee</TableHead>
                    <TableHead className='w-1/3'>Attendance</TableHead>
                    <TableHead className='w-1/3'>Last Location</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {empldata.map((item, index) => (
                        <TableRow className='flex w-full' key={index}>
                            <TableCell className="w-1/3" dangerouslySetInnerHTML={{ __html: item.name }} />
                            <TableCell className="w-1/3" dangerouslySetInnerHTML={{ __html: item.status }} />
                            <TableCell className="w-1/3" dangerouslySetInnerHTML={{ __html: item.location }} />
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default EmployeeTable