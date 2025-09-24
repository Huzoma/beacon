"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ placeholder = "Search...", onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <form
      className="flex items-center bg-white/80 backdrop-blur rounded-xl shadow-md px-3 py-2 w-full max-w-3xl border border-gray-200"
    >
      {/* Search Icon from Lucide */}
      <span className="text-gray-800 mr-2 flex items-center">
        <Search size={20}/>
      </span>
      <input
        type="text"
        name="search"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
        autoComplete="off"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-1 rounded-lg bg-blue-500 text-white font-semibold shadow transition-all duration-200 hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
    </form>
  );
}