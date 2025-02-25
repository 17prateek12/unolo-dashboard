import React from 'react';
import { FaArrowUp } from "react-icons/fa6";

interface fourForm {
    title: string,
    num1: number,
    perce: number,
    prev: number,
};

const FourStatus = () => {
    const fourformdata: fourForm[] = [
        { title: 'Forms Filled', num1: 0, perce: 0, prev: 0 },
        { title: 'Photos Uploaded', num1: 5, perce: 400, prev: 1 },
        { title: 'New Clients', num1: 0, perce: 0, prev: 0 },
        { title: 'Orders Submitted', num1: 0, perce: 0, prev: 0 },
    ]
    return (
        <div className="grid auto-rows-min grid-cols-2 justify-between w-full h-auto content-between gap-4">
            {fourformdata.map((item, index) => (
                <div className="w-full h-full rounded-lg bg-white flex flex-col gap-2 items-center justify-between py-2 px-4"
                    key={index}>
                    <p className='xl:text-xl md:text-base text-[12px] font-bold flex items-center gap-2'>{item.title}</p>
                    <div className='flex-col flex md:flex-row xl:flex-col md:w-full md:justify-between items-center'>
                        <div className='flex items-end xl:my-4 my-2'>
                            <p className='xl:text-3xl font-bold text-base'>{item.num1}</p>
                            <p className='flex items-end xl:text-base text-[10px]'><FaArrowUp /> {item.perce}%</p>
                        </div>
                        <div className='xl:px-4 xl:py-2 px-2 py-1 xl:text-base text-[10px] rounded-full border border-gray-100 w-fit'>{item.prev} Yesterday</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FourStatus