import React from "react";
import { CiCircleQuestion } from "react-icons/ci";
import SemiCircleDonut from './SemiCircleDonut';
import Highcharts from "highcharts";


const StatusDashboard = () => {

    const options: Highcharts.Options = {
        chart: {
            type: "pie",
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: "transparent",
        },
        title: {
            text: '9 <br/> All Employees',
            align: 'center',
            verticalAlign: 'top',
            y: 100,
            style: {
                fontSize: '1.1em'
            }
        },
        tooltip: {
            pointFormat: '{point.name}: <b>{point.y}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                },
                startAngle: -90,
                endAngle: 90,
                center: ["50%", "40%"],
                size: "100%",
                innerSize: "80%",
                borderWidth: 0,
            },
        },
        series: [
            {
                type: "pie",
                data: [
                    { name: 'Punch In', y: 33.33, color: "#3498db" },
                    { name: 'Punch Out', y: 66.66, color: "#2ecc71" },
                ],
            },
        ],
    };

    return (
        <div className='w-full h-full flex items-center gap-4'>
            {/*------------------------- Real Time Status -------------------------*/}
            <div className='w-1/2 h-full rounded-lg bg-white py-2 px-2 lg:px-4 flex flex-col overflow-hidden'>
                <p className='xl:text-xl md:text-[14px] text-[12px]  font-bold flex items-center gap-2'>Real Time Status{" "}<CiCircleQuestion /></p>
                <hr className='w-full bg-gray-400 mx-auto my-2' />
                <div className='w-full flex items-center justify-evenly md:my-2'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div className='flex items-center gap-2'>
                            <div className='w-2 h-2 bg-black rounded-[50%]' />
                            <p className='text-base font-semibold'>3</p>
                        </div>
                        <p className='md:text-[12px] text-[10px] font-medium'>Punched In</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div className='flex items-center gap-2'>
                            <div className='w-2 h-2 bg-black rounded-[50%]' />
                            <p className='text-base font-semibold'>6</p>
                        </div>
                        <p className='md:text-[12px] text-[10px] font-medium'>Punched Out</p>
                    </div>
                </div>
                <div className="py-0 px-0 flex justify-center w-full overflow-scroll bg-transparent">
                    <SemiCircleDonut options={options} />
                </div>
            </div>
            <div className='w-1/2 h-full flex flex-col gap-4'>
                {/*------------------------- Punched In Status -------------------------*/}
                <div className='w-full h-1/2 gap-4 flex flex-col py-2 xl:px-4 px-2 rounded-lg bg-white overflow-hidden'>
                    <div className='w-full flex items-center justify-between'>
                        <p className='xl:text-base md:text-[12px] text-[10px] font-bold'>Punched In (Inactive) <br /> Employees</p>
                        <CiCircleQuestion />
                    </div>
                    <p className='text-center xl:mt-4 mt-0 xl:text-3xl md:text-xl text-base font-bold'>3</p>
                </div>
                {/*------------------------- Staffing Strength -------------------------*/}
                <div className='w-full h-1/2 gap-4 flex flex-col py-2 xl:px-4 px-2 rounded-lg bg-white overflow-hidden'>
                    <div className='w-full flex items-center gap-4'>
                        <p className='xl:text-base md:text-[12px] text-[10px] font-bold'>Staffing Strength</p>
                        <CiCircleQuestion />
                    </div>
                    <p className='text-center xl:mt-4 mt-0 xl:text-3xl md:text-xl text-base font-bold'>0 / 0</p>
                </div>
            </div>
        </div>
    )
}

export default StatusDashboard