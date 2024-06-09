import React, { useState } from 'react';

const Dropdown = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center">
        {label}
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg">
          {options.map((option, index) => (
            <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer">{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
