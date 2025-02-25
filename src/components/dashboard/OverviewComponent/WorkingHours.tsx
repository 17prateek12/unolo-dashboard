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

const WorkingHours = () => {

  const options: Highcharts.Options = {
    chart: {
      type: "column",
      plotBorderWidth: 0,
      plotShadow: false,
      backgroundColor: "transparent",
    },
    title:{
       text:''
    },
    xAxis: {
      categories: [
        "03-02",
        "06-02",
        "09-02",
        "12-02",
        "15-02",
        "18-02",
        "21-02",
        "24-02",
        "28-02",
      ],
      crosshair: true,
      title: {
        text: "Dates (DD-MM)",
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Working Hours",
      },
    },
    tooltip: {
      valueSuffix: " hours",
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Working Hours",
        type: "column",
        data: [8, 7.5, 6, 8.5, 7, 9, 8, 6.5, 7.5], // Random working hours
        color: "#3498db",
      },
    ],
  };

  return (
    <div className='w-full h-full flex flex-col bg-white rounded-lg px-2 lg:px-4 py-2'>
      <div className='flex items-center w-full justify-between'>
        <p className='xl:text-xl md:text-[14px] text-[12px]  font-bold flex items-center gap-2'>Daily Average Working Hours</p>
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
      <div className="py-0 px-0 mx-0 my-0 flex justify-center items-center w-full overflow-scroll">
        <SemiCircleDonut options={options} />
      </div>
    </div>
  )
}

export default WorkingHours