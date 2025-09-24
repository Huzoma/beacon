// src/components/ui/CategoryButton.jsx
import React from 'react';
// Import PropTypes for runtime type checking
import PropTypes from './propTypes';

function CategoryButton({ category, active, onClick }) {
  const isActive = active === category;

  return (
    <button
      // Accessibility: Indicate pressed state and role for assistive tech
      aria-pressed={isActive}
      role="tab"
      onClick={() => onClick(category)}
      className={`
        flex items-center gap-1
        px-4 py-2 rounded-lg font-semibold text-sm
        transition-all duration-200
        ${isActive ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
      `}
    >
      {category}
    </button>
  );
}

// Add PropTypes for CategoryButton component
// This helps catch bugs by validating the types of props at runtime
CategoryButton.propTypes = {
  category: PropTypes.string.isRequired,
  active: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default CategoryButton;
