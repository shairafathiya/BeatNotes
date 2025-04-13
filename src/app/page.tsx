

import React from "react";
import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5ecda] text-[#3b362f]">
      {/* Navbar */}
      <nav className="bg-[#716c60] text-white flex justify-between items-center px-6 py-4 font-serif text-xl">
        <div className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Notes</a>
          <a href="#" className="hover:underline">Events</a>
        </div>
        <div className="text-white">Username</div>
      </nav>

      {/* Main Section */}
      <div className="flex flex-col items-center justify-center p-6 text-center">
        <div className="flex items-center gap-4 mt-10">
          
          <h1 className="text-[100px] font-bold tracking-widest">
          <img src="/image/disc.svg" alt="Disc Icon" className="w-35 h-45 inline-block" /> BEAT<br /><span className="text-[120px]">NOTES</span></h1>
          
        </div>
        <h6 className="text-[35px] font-light font-serif">Welcome to our project!</h6>
        <p className="text-[20px] font-serif">A platform for musicians to document their notes and events.</p>
        <p className="text-[20px] font-serif">Join us in spectacular world of melody creativity!</p>
        <p className="text-[20px] font-serif">Let's make music together!</p>

        {/* Icons Section */}
        <div className="flex gap-10  mt-16 ">
          <div className="bg-[#8a7d6c] p-6 rounded-xl text-white flex flex-col items-center w-40">
            <a href="../register" className="hover:underline text-lg font-serif">Register</a>
          </div>
          <div className="bg-[#b37840] p-6 rounded-xl text-white flex flex-col items-center w-40">
            <a href="../login" className="hover:underline text-lg font-serif">Login</a>
          </div>
        </div>
      </div>
      <footer className="p-4 bg-black items-center gap-4 mt-10">
            <div className="flex justify-center text-white text-sm font-serif">
                <p>Made by Shaira fathiya & Nur Shadiqah</p>
            </div>
            <div className="flex justify-center text-white text-sm font-serif">
                <p>@2025</p>
            </div>
        </footer>
    </div>
  );
}

