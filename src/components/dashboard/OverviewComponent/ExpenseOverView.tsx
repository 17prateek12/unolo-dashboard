import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoMdArrowDropdown } from "react-icons/io";
import SemiCircleDonut from './SemiCircleDonut';
import Highcharts from "highcharts";
import { FaIndianRupeeSign } from "react-icons/fa6";


interface ExpenseOver {
    label: string,
    cost: string,
    quantity: number,
}

const ExpenseOverView = () => {

    const expensedata: ExpenseOver[] = [
        { label: 'Total Expenses', cost: '38.06', quantity: 6 },
        { label: 'Pending Expenses', cost: '38.06', quantity: 6 },
        { label: 'Approved Expenses', cost: '0', quantity: 0 },
        { label: 'Rejected Expenses', cost: '0', quantity: 0 },
        { label: 'Paid Out', cost: '0', quantity: 0 },
    ]

    const options: Highcharts.Options = {
        chart: {
            type: "pie",
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: "transparent",
        },
        title: {
            text: "",
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                },
                size: "50%", // Increased size for better rendering
            },
            series: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: [
                    {
                        enabled: false,
                        format: "{point.percentage:.1f}%",
                        style: {
                            fontSize: "1.2em",
                            textOutline: "none",
                            opacity: 0.7,
                        },
                    },
                ],
            },
        },
        series: [
            {
                type: "pie",
                data: [
                    {
                        name: "Pending Leaves",
                        y: 100,
                    },
                ],
            },
        ],
    };


    return (
        <div className='w-full h-full bg-white rounded-lg flex flex-col px-2 xl:px-4 py-2'>
            <div className='w-full flex items-center md:justify-between justify-start gap-4'>
                <p className='xl:text-xl text-[14px] font-bold flex items-center gap-2'>Expense Overview</p>
                <div className='px-4 py-2 rounded-full flex items-center gap-2 border border-gray-400'>
                    <DropdownMenu>
                        <DropdownMenuTrigger className='flex items-center gap-2'>This Month <IoMdArrowDropdown /></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>This Day</DropdownMenuItem>
                            <DropdownMenuItem>This Week</DropdownMenuItem>
                            <DropdownMenuItem>This Month</DropdownMenuItem>
                            <DropdownMenuItem>This Year</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <hr className='w-full bg-gray-400 mx-auto my-2' />
            <div className='w-full h-full flex items-center md:flex-row flex-col overflow-scroll'>
            <div className='flex md:flex-col flex-wrap gap-4'>
                    {expensedata.map((item, index) => (
                        <div key={index} className='flex flex-col'>
                            <p className='text-[14px] font-bold'>{item.label}</p>
                            <p className='flex items-center text-[12px]'>< FaIndianRupeeSign />{item.cost}{" "}({item.quantity})</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center max-w-fit overflow-scroll">
                    <SemiCircleDonut options={options} />
            </div>
            </div>
  
            
        </div>
    )
}

export default ExpenseOverView

{/*<div className='flex md:w-full w-fit items-center md:justify-between 
            md:flex-row flex-col justify-center h-auto gap-4'>
               
                
            </div>  */}