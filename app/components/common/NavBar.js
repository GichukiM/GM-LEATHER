"use client";

import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

function NavBar() {
  const footwearItems = [
    "Oxfords",
    "Derby Shoes",
    "Loafers",
    "Brogues",
    "Monk Straps",
    "Chelsea Boots",
    "Chukka Boots",
    "Dress Boots",
    "Casual Boots",
    "Driving Shoes",
  ];

  const accessoriesItems = [
    "Shoe Care Products",
    "Shoe Accessories",
    "Sock Options",
    "Footwear Inserts",
    "Storage Solutions",
    "Shoe Maintenance Tools",
    "Footwear Bags",
    "Shoe Care Kits",
    "Shoe Shelves or Organizers",
    "Gift Items",
    "Shoe Repair Services",
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFootwearOpen, setIsFootwearOpen] = useState(false);
  const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false);

  const toggleFootwear = () => {
    setIsFootwearOpen(!isFootwearOpen);
    setIsAccessoriesOpen(false);
  };

  const toggleAccessories = () => {
    setIsAccessoriesOpen(!isAccessoriesOpen);
    setIsFootwearOpen(false);
  };

  // Effect to handle body scroll locking
  useEffect(() => {
    if (isSidebarOpen || isCartOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSidebarOpen, isCartOpen, isSearchOpen]);

  return (
    <div className="bg-white dark:bg-gray-800">
      {/* Top Navbar */}
      <div className="flex items-center justify-between h-16 px-4 md:px-8 relative">
        {/* Toggle Button for Mobile View */}
        <button
          type="button"
          className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <AiOutlineMenu className="w-6 h-6" />
          <span className="sr-only">Open Menu</span>
        </button>

        <div className="flex items-center space-x-4">
          <div className="relative group hidden md:block" onMouseEnter={() => setIsFootwearOpen(true)}
            onMouseLeave={() => setIsFootwearOpen(false)}>
            <a
              href="#"
              className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2"
              onClick={toggleFootwear}
            >
              FOOTWEAR
            </a>
            {/* Dropdown List for Desktop View */}
            {(isFootwearOpen || isAccessoriesOpen === false) && (
              <div className="fixed top-16 left-0 right-0 w-screen bg-white z-50 md:group-hover:block md:hidden">
                <ul className="py-2">
                  {footwearItems.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-start"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="relative group hidden md:block" onMouseEnter={() => setIsAccessoriesOpen(true)}
            onMouseLeave={() => setIsAccessoriesOpen(false)}>
            <a
              href="#"
              className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2"
              onClick={toggleAccessories}
            >
              ACCESSORIES
            </a>
            {/* Dropdown List for Desktop View */}
            {(isAccessoriesOpen || isFootwearOpen === false) && (
              <div className="fixed top-16 left-0 right-0 w-screen bg-white z-50 md:group-hover:block md:hidden">
                <ul className="py-2">
                  {accessoriesItems.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-start"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Centered Brand */}
        <div className='flex flex-col items-center font-extrabold flex-grow'>
          <h5 className="text-sm">MIRICO RICOLI</h5>
          <span className="text-sm">Men's wear</span>
        </div>

       {/* Right Side Icons */}
       <div className="flex items-center space-x-4">
          <button
            type="button"
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <CiSearch className="w-6 h-6" />
            <span className="sr-only">Search</span>
          </button>
          <CiUser className="hidden md:block w-6 h-6" />
          <button
            type="button"
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <BsBag className="w-6 h-6" />
            <span className="sr-only">Cart</span>
          </button>
        </div>
      
      </div>

      {/* Sidebar Menu for Mobile View */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 md:hidden">
          <div className="relative w-full bg-white dark:bg-gray-800 h-full overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400"
              onClick={() => setIsSidebarOpen(false)}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className='flex flex-col h-full'>
              <ul className="flex-grow p-4 py-16 space-y-4">
                <li>
                  <a
                    href="#"
                    className="block text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2"
                    onClick={() => setIsFootwearOpen(!isFootwearOpen)}
                  >
                    FOOTWEAR
                  </a>
                  {isFootwearOpen && (
                    <ul className="py-2">
                      {footwearItems.map((item, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2"
                    onClick={() => setIsAccessoriesOpen(!isAccessoriesOpen)}
                  >
                    ACCESSORIES
                  </a>
                  {isAccessoriesOpen && (
                    <ul className="py-2">
                      {accessoriesItems.map((item, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
              <div className="p-4 text-gray-900 dark:text-white flex flex-col items-start">
                <div className='border-t-1 border-gray-200 w-full flex flex-row items-center px-4 gap-4'>
                  <CiUser className="w-6 h-6 gap-4" />
                  <a
                    href="/login"
                    className="flex items-center p-4 flex-row text-sm font-medium"
                  >
                    Sign In / Log In
                  </a>
                </div>
                <div className='border-t-1 border-gray-200 w-full flex flex-row px-4 gap-4'>
                  <a
                    href="/login"
                    className="block text-sm font-medium"
                  >
                    About Us
                  </a>
                  <a
                    href="/contact"
                    className="block text-sm font-medium"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Search Dropdown for Mobile View */}
      {isSearchOpen && (
        <div className="fixed inset-x-0 top-16 z-10 bg-white dark:bg-gray-800 p-4 shadow-lg">
          <input
            type="text"
            className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
      )}
    

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="fixed inset-y-0 right-0 w-full bg-white dark:bg-gray-800 h-full">
            <button
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400"
              onClick={() => setIsCartOpen(false)}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Cart</h2>
              {/* Cart content here */}
            </div>
          </div>
        </div>
      )}
    </div>

  );
}

export default NavBar;
