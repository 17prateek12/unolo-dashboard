import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
  } from "@/components/ui/table"

interface TeamwiseData {
    label: string,
    num1: number,
    num2: number,
}
const TeamWiseAttendance = () => {
    const teamdata: TeamwiseData[] = [
        { label: 'Bond', num1: 0, num2: 1 },
        { label: 'default', num1: 2, num2: 5 },
        { label: 'Om Bhagwan', num1: 1, num2: 0 },
    ];

    return (
        <div className='w-full h-full flex items-center flex-col xl:px-4 px-2 py-2 bg-white rounded-lg'>
            <p className='xl:text-xl md:text-[14px] text-[12px]  font-bold flex items-center gap-2'>TeamWise Attendance</p>
            <hr className='w-full bg-gray-400 mx-auto my-2' />
            <Table className=' gap-2 mt-4 w-full h-auto overflow-y-scroll overflow-x-scroll'>
                <TableBody>
                {teamdata.map((item, index) => (
                    <TableRow key={index} className='flex items-start justify-between border-none'>
                        <TableCell className='w-[60%]'>{item.label}</TableCell>
                        <TableCell className='flex items-center gap-2 w-[20%]'>
                            <div className='w-2 h-2 bg-black rounded-[50%]' />
                            {item.num1}
                        </TableCell>
                        <TableCell className='flex items-center gap-2 w-[20%]'>
                            <div className='w-2 h-2 bg-black rounded-[50%]' />
                            {item.num2}
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default TeamWiseAttendance