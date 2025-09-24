// src/components/search-bar/CategoryButtons.jsx
"use client";

import React from "react";
import CategoryButton from "@/components/ui/categoryButton";
import { categories } from "@/constants/jobsData";

export default function CategoryButtons({ activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center my-6">
      {categories.map((category) => (
        // For each category in the categories array, render a CategoryButton
        <CategoryButton
          key={category} // Unique key for React's list rendering
          category={category} // Pass the category name to the button
          active={activeCategory} // Pass the currently active category for highlighting
          onClick={onCategoryChange} // Pass the click handler to change the active category
        />
      ))}
    </div>
  );
}