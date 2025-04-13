"use client";


import React from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter(); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    router.push("../welcome"); // Redirect to the welcome page
  };

  return (
  
    <div className="min-h-screen flex items-center justify-center bg-[#f5ecda] text-[#3b362f]">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Login to BeatsNotes</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="your@email.com"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#5f3d3d] text-white py-2 rounded-md hover:bg-[#472d2d]"
          >
            Login
          </button>


        </form>
      </div>
    </div>
  );
}






