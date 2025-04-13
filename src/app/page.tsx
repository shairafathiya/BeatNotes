

import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5ecda] text-[#3b362f]">
      {/* Navbar */}
      <nav className="bg-[#716c60] text-white flex justify-between items-center px-6 py-4 font-serif text-xl">
        <div className="space-x-4">
          <a href="../login/page.tsx" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Notes</a>
          <a href="#" className="hover:underline">Events</a>
        </div>
        <div className="text-white">Shaira</div>
      </nav>

      {/* Main Section */}
      <div className="flex flex-col items-center justify-center p-6 text-center">
        <div className="flex items-center gap-4 mt-10">
          <div className="text-[80px]">🎼</div>
          <h1 className="text-5xl font-bold tracking-widest">BEATS<br /><span className="text-6xl">NOTES</span></h1>
          <div className="text-[80px]">🔊</div>
        </div>

        {/* Icons Section */}
        <div className="flex gap-10 mt-16">
          <div className="bg-[#8a7d6c] p-6 rounded-xl text-white flex flex-col items-center w-40">
            <div className="text-4xl">🎵</div>
            <span className="mt-2 text-lg font-serif">Notes</span>
          </div>
          <div className="bg-[#5f3d3d] p-6 rounded-xl text-white flex flex-col items-center w-40">
            <div className="text-4xl">💿</div>
            <span className="mt-2 text-lg font-serif">Music</span>
          </div>
          <div className="bg-[#b37840] p-6 rounded-xl text-white flex flex-col items-center w-40">
            <div className="text-4xl">✴️</div>
            <span className="mt-2 text-lg font-serif">Events</span>
          </div>
        </div>
      </div>
    </div>
  );
}

