"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("Kuala Lumpur, Malaysia");

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex gap-2 w-full">
      <input
        className="flex justify-center items-center bg-white/10 focus:bg-white/15 backdrop-blur-md p-4 border border-white/30 focus:border-white/50 border-solid rounded-full focus:outline-none w-full font-medium placeholder:text-white/50 text-sm transition-all"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Enter city name..."
      />
      <button
        onClick={handleSearch}
        className="bg-white hover:bg-[#f0f0f0] px-5 rounded-full text-black transition-colors hover:cursor-pointer"
      >
        <FiSearch />
      </button>
    </div>
  );
}
