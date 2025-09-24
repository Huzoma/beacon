// components/FooterColumn.jsx
import React from 'react';

const FooterColumn = ({ title, links }) => {
  return (
    <div className="flex-1">
      <h4 className=" font-bold mb-4">{title}</h4>
      <ul className="font-normal text-gray-400 ">
        {links.map((link, index) => (
          <li key={index} className="mb-2">
            <a href={link.url} className="hover:underline hover:text-white">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;