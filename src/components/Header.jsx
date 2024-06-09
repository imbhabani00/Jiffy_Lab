import React, { useState } from 'react';
import logo from "../icons/logo.ico";
import Dropdown from './Dropdown';
import Search from './Search';
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TbArrowBarBoth } from "react-icons/tb";

import { MdOutlineLogout } from "react-icons/md";

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const blockchainOptions = ['Design', 'Frontend', 'Backend', 'Blockchain', 'Content'];
  const developersOptions = ['Bhabani', 'Shakti', 'Leeza'];
  const moreOptions = ['Simran', 'Trupti', 'Nikita'];

  return (
    <header className={`flex flex-wrap justify-between items-center p-4 shadow ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="flex items-center space-x-4 mx-10 relative z-10"> 
        <img src={logo} alt="jiffy_logo" className='h-10' />
        <div className="text-3xl font-bold">jiffyscan</div>
        <a href="#" className="ml-4">Home</a>
        <Dropdown label="Blockchain" options={blockchainOptions} />
        <Dropdown label="Developers" options={developersOptions} />
        <Dropdown label="More" options={moreOptions} />
        <a href="#" className="ml-4">About 4337</a>
      </div>
      <Search />
      <div className="flex items-center space-x-4 mx-10 relative z-10"> 
        <div className="relative">
          <button onClick={() => setProfileDropdownOpen(!profileDropdownOpen)} className="flex items-center">
            <CgProfile className="w-8 h-8 rounded-full text-purple-600"/>
            <div className="flex flex-col items-start ml-2">
              <span>Olivia Rhye</span>
              <span className="text-sm text-gray-500">olivia@jiffyscan.xyz</span>
            </div>
          </button>
          {profileDropdownOpen && (
            <ul className={`absolute right-0 mt-2 w-48 ${isDarkMode ? 'bg-black text-white border-gray-600' : 'bg-white text-black border-gray-200'} border shadow-lg z-20`}> {/* Add z-20 to place the dropdown in front */}
            <li className="p-2 flex items-center hover:bg-gray-100 cursor-pointer">
              <CgProfile className="mr-2" />
              View profile
            </li>
            <li className="p-2 flex items-center hover:bg-gray-100 cursor-pointer">
              <MdOutlineSpaceDashboard className="mr-2" />
              Dashboard
            </li>
            <li className="p-2 flex items-center hover:bg-gray-100 cursor-pointer gap-2">
            <TbArrowBarBoth />
              API
            </li>
            <li className="p-2 flex items-center hover:bg-gray-100 cursor-pointer">
              <MdOutlineLogout className="mr-2" />
              Log out
            </li>
          </ul>
          )}
        </div>
        <button onClick={toggleDarkMode} className="p-2">
          {isDarkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
        </button>
      </div>
    </header>
  );
};

export default Header;
