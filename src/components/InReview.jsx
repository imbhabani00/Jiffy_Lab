import React from 'react';
import HackathonCard from '../components/HackathonCard';

const inReviewHackathons = [
  { id: 4, img: "https://png.pngtree.com/png-clipart/20210808/original/pngtree-letter-s-logo-png-vector-png-image_6616257.jpg", title: "Write a thread with memes for PP Program on Solana", description: "by pSTAKE Finance", date: "06/03/2023", participants: 12, frontend: "frontend", category: "Content", btn1: "Content" },
  { id: 1, img: "https://png.pngtree.com/png-vector/20220922/ourmid/pngtree-business-st-letter-logo-vector-png-image_6209212.png", title: "Design Earn's Talent Leaderboard", description: "by Superteam", date: "04/04/2023", participants: 10, frontend: "frontend", category: "Design", btn1: "Design" },
  { id: 2, img: "https://png.pngtree.com/png-clipart/20210321/original/pngtree-dl-art-gold-and-silver-good-logo-design-zip-png-image_6108545.jpg", title: "Armada UI/UX Review", description: "by Dean's List Dao", date: "21/03/2023", participants: 7, category: "Design", btn1: "Design" },
  { id: 3, img: "https://png.pngtree.com/png-vector/20210222/ourmid/pngtree-glitch-distorted-letter-d-broken-pixel-effect-png-image_2936130.jpg", title: "Create a Frame for Farcaster", description: "by Deribet", date: "14/03/2023", participants: 20, frontend: "frontend", category: "Frontend", btn1: "Frontend", btn2: "Backend", btn3: "Blockchain" }
];

const InReview = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 mt-4 w-4/5">
        {inReviewHackathons.map(hackathon => (
          <HackathonCard key={hackathon.id} {...hackathon} activeTab="In Review" />
        ))}
      </div>
    </div>
  );
};

export default InReview;
