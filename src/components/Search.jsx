import React, { useState } from 'react';
import { BsLightningCharge } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsSelected(true);
  };

  const handlePaste = (e) => {
    setSearchTerm(e.clipboardData.getData('Text'));
  };

  return (
    <div className="relative flex items-center">
      <BsLightningCharge className='absolute left-3 text-yellow-600' />
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onPaste={handlePaste}
        onFocus={() => setIsSelected(true)}
        onBlur={() => setIsSelected(false)}
        className="pl-20 pr-12 py-2  border rounded-full w-80"
        placeholder="Search an userOP..."
      />
      <RxDividerVertical className='absolute left-12 text-gray-400' />
      <IoChevronDownOutline className='absolute left-8 text-gray-600' />
    </div>
  );
};

export default Search;
