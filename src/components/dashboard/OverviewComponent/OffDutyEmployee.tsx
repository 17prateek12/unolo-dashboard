import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoMdArrowDropdown } from "react-icons/io";
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
    teamname: string,
    status: string,
}
const OffDutyEmployee = () => {

    const empldata: Employees[] = [
        {
            name: "Rahul Singh",
            teamname: "default",
            status: "Weekly Off",
        },
    ];

    return (
        <div className='w-full h-full flex flex-col bg-white xl:px-4 px-2 py-2 rounded-lg'>
            <div className='w-full flex items-center flex-wrap gap-2'>
                <p className='xl:text-xl md:text-[14px] text-[12px] font-bold flex items-center gap-2 text-left'>Employees{" "}({empldata.length})</p>
                <DropdownMenu>
                    <DropdownMenuTrigger className='px-4 py-1 rounded-full flex items-center gap-2 border border-gray-400 ml-auto'>New <IoMdArrowDropdown /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>New</DropdownMenuItem>
                        <DropdownMenuItem>Old</DropdownMenuItem>
                        <DropdownMenuItem>Ex</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger className='px-4 py-1 rounded-full flex items-center gap-2 border border-gray-400 ml-auto'>New <IoMdArrowDropdown /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>New</DropdownMenuItem>
                        <DropdownMenuItem>Old</DropdownMenuItem>
                        <DropdownMenuItem>Ex</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <div className='max-w-full w-full h-[2rem] rounded-lg relative flex items-center my-2'>
                    <IoSearch className='absolute ml-2' />
                    <Input type='text' placeholder='Search Here' className='w-full h-full bg-gray-50 pl-6 border border-gray-400 focus:outline-none' />
                </div>
            </div>
            <hr className='w-full bg-gray-400 mx-auto my-2' />
            <Table className='w-full flex flex-col overflow-y-scroll mt-4'>
                <TableHeader>
                    <TableRow  className='w-full flex items-center'>
                    <TableHead className='w-1/3'>Employee</TableHead>
                    <TableHead className='w-1/3'>Team Name</TableHead>
                    <TableHead className='w-1/3'>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {empldata.map((item, index) => (
                        <TableRow className='flex w-full' key={index}>
                            <TableCell className="w-1/3" dangerouslySetInnerHTML={{ __html: item.name }} />
                            <TableCell className="w-1/3" dangerouslySetInnerHTML={{ __html: item.teamname }} />
                            <TableCell className="w-1/3" dangerouslySetInnerHTML={{ __html: item.status }} />
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default OffDutyEmployee