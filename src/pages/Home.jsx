import React, { useState } from 'react';
import Header from '../components/Header';
import HackathonCard from '../components/HackathonCard';
import InReview from '../components/InReview';
import { IoFilter, IoSearch } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";

const hackathons = [
  { id: 1, img: "https://png.pngtree.com/png-vector/20220922/ourmid/pngtree-business-st-letter-logo-vector-png-image_6209212.png", title: "Design Earn's Talent Leaderboard", description: "by Superteam", date: "04/04/2023", price: "700 USDC", prize: "1st Place", participants: 10, frontend: "frontend", category: "Design", btn1: "Design" },
  { id: 2, img: "https://png.pngtree.com/png-clipart/20210321/original/pngtree-dl-art-gold-and-silver-good-logo-design-zip-png-image_6108545.jpg", title: "Armada UI/UX Review", description: "by Dean's List Dao", date: "21/03/2023", participants: 7, category: "Design", btn1: "Design" },
  { id: 3, img: "https://png.pngtree.com/png-vector/20210222/ourmid/pngtree-glitch-distorted-letter-d-broken-pixel-effect-png-image_2936130.jpg", title: "Create a Frame for Farcaster", description: "by Deribet", date: "14/03/2023", price: "500 USDC", prize: "1st Place", participants: 20, frontend: "frontend", category: "Frontend", btn1: "Frontend", btn2: "Backend", btn3: "Blockchain" },
  { id: 4, img: "https://png.pngtree.com/png-clipart/20210808/original/pngtree-letter-s-logo-png-vector-png-image_6616257.jpg", title: "Write a thread with memes for PP Program on Solana", description: "by pSTAKE Finance", date: "06/03/2023", price: "100 USDC", prize: "3rd Place", participants: 12, frontend: "frontend", category: "Content", btn1: "Content" }
];

const Home = () => {
  const [activeTab, setActiveTab] = useState('Completed');
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const filteredHackathons = hackathons.filter(hackathon => {
    const matchesFilter = filter === 'All' || hackathon.category === filter;
    const matchesSearch = hackathon.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4  md:space-y-0">
          <div className="flex items-center space-x-4 relative">
            <span className="mr-4 ml-4">Work History</span>
            <RxDividerVertical className={`h-full ${activeTab === 'Completed' ? 'border-blue-700' : 'border-gray-300'}`} />
            <span
              className={`cursor-pointer  ${activeTab === 'Completed' ? 'text-blue-700' : 'text-gray-500'}`}
              onClick={() => setActiveTab('Completed')}>
              Completed
            </span>
            <span
              className={`cursor-pointer ${activeTab === 'In Review' ? 'text-blue-700' : 'text-gray-500'}`}
              onClick={() => setActiveTab('In Review')}>
              In Review
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <RxDividerVertical />
            <IoFilter />
            <span>Filter By</span>
            <select
              onChange={(e) => setFilter(e.target.value)}
              className="p-2 w-40 border bg-white text-purple-800">
              <option value="All">All</option>
              <option value="Design">Design</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Blockchain">Blockchain</option>
              <option value="Content">Content</option>
            </select>
            <div className="relative left-10">
              <input
                type="text"
                placeholder="Search Bounties, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 rounded-full pl-10 pr-4 py-2 border bg-blue-50 border-gray-300 focus:outline-none focus:border-gray-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IoSearch />
              </div>
            </div>
          </div>
        </div>
        {activeTab === 'Completed' ? (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 mt-4 w-4/5">
            {filteredHackathons.map(hackathon => (
              <HackathonCard key={hackathon.id} {...hackathon} activeTab={activeTab} />
            ))}
          </div>
        ) : (
          <InReview />
        )}
      </div>
    </div>
  );
};

export default Home;
