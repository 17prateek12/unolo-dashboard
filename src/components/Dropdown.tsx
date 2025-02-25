"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoMdArrowDropdown } from "react-icons/io";

interface DropdownProps {
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [selected, setSelected] = useState(options[0]); 

  return (
    <div className='px-4 py-1 rounded-full flex items-center gap-2 ml-auto'>
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none border-none">
        {selected} <IoMdArrowDropdown />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {options.map((option, index) => (
          <DropdownMenuItem
            key={index}
            onClick={() => setSelected(option)}
          >
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  );
};

export default Dropdown;
