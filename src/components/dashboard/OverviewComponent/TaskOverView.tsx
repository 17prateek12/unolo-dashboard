import React from 'react'
import SemiCircleDonut from './SemiCircleDonut';
import Highcharts from "highcharts";

interface TaskOver{
    num1:number,
    statu:string,
}
const TaskOverView = () => {
    const options: Highcharts.Options = {
            chart: {
                type: "pie",
                plotBorderWidth: 0,
                plotShadow: false,
                backgroundColor: "transparent",
            },
            title: {
                text: '1 <br/> Total Tasks',
                align: 'center',
                verticalAlign: 'top',
                y: 140,
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
                    center: ["50%", "60%"],
                    size: "100%",
                    innerSize: "80%",
                    borderWidth: 0,
                },
            },
            series: [
                {
                    type: "pie",
                    data: [
                        { y: 100, color: "#3498db" },
                    ],
                },
            ],
        };

    const taskdata:TaskOver[] = [
        {num1:0,statu:'Not Yet Started'},
        {num1:0,statu:'Delayed'},
        {num1:0,statu:'In Progress'},
        {num1:1,statu:'Completed'},
    ]
  return (
    <div className='w-full h-full rounded-lg bg-white flex flex-col px-2 lg:px-4 py-2'>
        <p className='xl:text-xl md:text-[14px] text-[12px]  font-bold flex items-center gap-2'>Task Status Overview</p>
        <hr className='w-full bg-gray-400 mx-auto my-2' />
        <div className='flex flex-wrap items-center gap-4 justify-evenly'>
            {taskdata.map((item,index)=>(
                <div className='' key={index}>
                    <div className='flex items-center gap-2'>
                        <div className='w-2 h-2 rounded-[50%] bg-black' />
                        {item.num1}
                    </div>
                    <p className='text-[12px]'>{item.statu}</p>
                </div>
            ))}
        </div>
        <div className="py-0 px-0 flex justify-center w-full overflow-scroll bg-transparent mt-4">
                    <SemiCircleDonut options={options} />
                </div>
    </div>
  )
}

export default TaskOverView