// src/components/ui/CategoryButton.jsx
import React from "react";

export default function CategoryButton({ category, active, onClick }) {
  const isActive = active === category;

  return (
    <button
      onClick={() => onClick(category)}
      className={`
        flex items-center gap-1
        px-4 py-2 rounded-lg font-semibold text-sm
        transition-all duration-200
        ${isActive
          ? "bg-blue-600 text-white"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }
      `}
    >
      {category}
    </button>
  );
}