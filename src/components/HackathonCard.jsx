import React from 'react';

import { AiFillDollarCircle } from "react-icons/ai";
import { IoTrophyOutline } from "react-icons/io5";
const HackathonCard = ({ img, title, description, price, date, prize, participants, btn1, btn2, btn3 }) => {
  return (
    <div className="p-4 border rounded hover:shadow-lg transition-shadow duration-300 flex items-center">

      <div className="flex items-center mr-4">

        <div className="w-16 h-16 rounded flex items-center justify-center mr-4">

          <img src={img} alt="Hackathon Icon" className="h-8 w-8" />
        </div>

        <div className='flex flex-col'>
          <div className="flex items-center">
            <span className="text-xl font-semibold mr-2">{title}</span>
            <span className='text-gray-500'>{description}</span>
          </div>

          <div className="flex items-center mt-2">
            <span className="mr-1 text-blue-500"><AiFillDollarCircle /></span>
            <span>{price} </span>{/* Divider */}
            <div className="border-l mx-4 h-8"></div>
            <IoTrophyOutline className='text-blue-500 mr-2' />
            <span>{prize}</span>
            <span className='ml-2 bg-purple-200 text-purple-500 w-20 text-center rounded-md'>{btn1}</span>
            <span className='ml-2 bg-orange-200 text-orange-600 w-20 text-center rounded-md'>{btn2}</span>
            <span className='ml-2 bg-pink-200 text-pink-600 w-20 text-center rounded-md'>{btn3}</span>
          </div>

        </div>
      </div>

      <div className="ml-auto text-right">
        <div>
          <span className='text-gray-400'>{date}</span>
        </div>

        <div>
          <span>{participants} </span>
          <span className='text-gray-400'>Participants</span>
        </div>
      </div>
    </div>
  );
};

export default HackathonCard;
