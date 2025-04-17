// src/components/NavLinks.jsx
import React, { useState } from "react";

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "Deals", href: "/deals" },
  ];

  return (
    <>
      {/* Hamburger Icon (Visible on Mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 hover:text-blue-400 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Nav Links */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 transition-all duration-300`}
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="block md:inline-block text-gray-200 hover:text-blue-400 py-2 md:py-0 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </>
  );
};

export default NavLinks;
