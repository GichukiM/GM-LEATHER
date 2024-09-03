"use client";

import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import Cart from "../../../app/cart/page";

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
      <p class="flex h-10 items-center justify-center bg-black px-4 text-sm font-medium text-white sm:px-6 lg:px-8">Get free delivery on orders over Ksh. 20000</p>
      {/* Top Navbar */}
      <div className="flex items-center justify-between h-16 px-4 md:px-8 relative border-b">
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

          <div className="relative group hidden md:block">
            <button
              aria-expanded={isFootwearOpen}
              aria-controls="footwear-dropdown"
              onClick={toggleFootwear}
              className="text-gray-600 hover:text-black p-4"
            >
              FOOTWEAR
            </button>
            {isFootwearOpen && (
              <div id="footwear-dropdown" className="fixed left-0 right-0 top-24 w-screen bg-white z-50">
                <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
                <div className="relative bg-white">
                  <div className="mx-auto max-w-7xl px-8 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                      <div className="text-sm">
                        <p id="Footwear-heading" className="font-medium text-gray-900">All Footwear</p>
                        <ul role="menu" aria-labelledby="Footwear-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                          {footwearItems.map((item, index) => (
                            <li key={index} className="flex">
                              <a href="#" role="menuitem" className="text-gray-600 hover:text-black">{item}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                        <div className="group relative text-base sm:text-sm">
                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <img src="/public/Hero-2.jpg" alt="Footwear" className="object-cover object-center" />
                          </div>
                          <a href="#" className="mt-6 block font-medium text-gray-900">
                            <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                            New Arrivals
                          </a>
                          <p aria-hidden="true" className="mt-1">Shop now</p>
                        </div>
                        <div className="group relative text-base sm:text-sm">
                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <img src="/public//Hero-2.jpg" alt="Footwear" className="object-cover object-center" />
                          </div>
                          <a href="#" className="mt-6 block font-medium text-gray-900">
                            <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                            Basic Footwear
                          </a>
                          <p aria-hidden="true" className="mt-1">Shop now</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative group hidden md:block">
            <button
              aria-expanded={isAccessoriesOpen}
              aria-controls="accessories-dropdown"
              onClick={toggleAccessories}
              className="text-gray-600 hover:text-black p-4"
            >
              ACCESSORIES
            </button>
            {isAccessoriesOpen && (
              <div id="accessories-dropdown" className="fixed left-0 right-0 top-24 w-screen bg-white z-50">
                <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
                <div className="relative bg-white">
                  <div className="mx-auto max-w-7xl px-8 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                      <div className="text-sm">
                        <p id="Accessories-heading" className="font-medium text-gray-900">Accessories</p>
                        <ul role="menu" aria-labelledby="Accessories-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                          {accessoriesItems.map((item, index) => (
                            <li key={index} className="flex">
                              <a href="#" role="menuitem" className="hover:text-gray-800">{item}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                        <div className="group relative text-base sm:text-sm">
                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <img src="/public/Hero-2.jpg" alt="Accessory" className="object-cover object-center" />
                          </div>
                          <a href="#" className="mt-6 block font-medium text-gray-900">
                            <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                            New Arrivals
                          </a>
                          <p aria-hidden="true" className="mt-1">Shop now</p>
                        </div>
                        <div className="group relative text-base sm:text-sm">
                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <img src="/public/Hero-2.jpg" alt="Accessory" className="object-cover object-center" />
                          </div>
                          <a href="#" className="mt-6 block font-medium text-gray-900">
                            <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                            Belts
                          </a>
                          <p aria-hidden="true" className="mt-1">Shop now</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Centered Brand */}
        <div className='flex flex-col items-center font-extrabold flex-grow p-4 md:p-6'>
          <a href='/' className='flex items-center justify-center flex-col'>
          <h5 className="text-sm md:text-xl text-gray-900 dark:text-gray-100 mb-1">MIRICO RI COLI</h5>
          <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Nairobi, Kenya</span>
          </a>
        </div>

       {/* Right Side Icons */}
       <div className="flex items-center space-x-4">
          <button
            type="button"
            className="text-gray-500 dark:text-gray-400 hover:text-black text-sm p-2.5"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <CiSearch className="w-6 h-6" />
            <span className="sr-only">Search</span>
          </button>
          <a
            href='/logIn'
            type="button"
            className="text-gray-500 dark:text-gray-400 hover:text-black text-sm p-2.5"
          >
            <CiUser className="hidden md:block w-6 h-6" />
            <span className="sr-only">signIn/SignUp</span>
          </a>
          <a
            href='/cart'
            type="button"
            className="text-gray-500 dark:text-gray-400 hover:text-black text-sm p-2.5"
          >
            <BsBag className="w-6 h-6" />
            <span className="sr-only">Cart</span>
          </a>
        </div>
      
      </div>

      {/* Sidebar Menu for Mobile View */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 md:hidden h-full">
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
              <div className="flex-grow p-4 py-16 overflow-y-auto">
                <div className="flex space-x-4">
                  {/* Menu Links */}
                  <button
                    className={`flex-grow text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2 ${isFootwearOpen ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                    onClick={() => {
                      setIsFootwearOpen(true);
                      setIsAccessoriesOpen(false);
                    }}
                  >
                    FOOTWEAR
                  </button>
                  <button
                    className={`flex-grow text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2 ${isAccessoriesOpen ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                    onClick={() => {
                      setIsFootwearOpen(false);
                      setIsAccessoriesOpen(true);
                    }}
                  >
                    ACCESSORIES
                  </button>
                </div>

                {/* Content Display */}
                <div className="mt-8">
                  {/* Footwear Content */}
                  {isFootwearOpen && (
                    <div className="flex flex-col w-full">
                      {/* Images Row */}
                      <div className="flex flex-row gap-x-8 mb-8">
                        <div className="flex-none">
                          {/* Replace with actual image URLs */}
                          <div className="group relative text-sm">
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg" alt="Footwear Image 1" className="object-cover object-center w-full h-full" />
                            </div>
                            <a href="#" className="mt-6 block font-medium text-gray-900">
                              <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                              Footwear Item 1
                            </a>
                            <p aria-hidden="true" className="mt-1">Shop now</p>
                          </div>
                        </div>
                        <div className="flex-none">
                          {/* Replace with actual image URLs */}
                          <div className="group relative text-sm">
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg" alt="Footwear Image 2" className="object-cover object-center w-full h-full" />
                            </div>
                            <a href="#" className="mt-6 block font-medium text-gray-900">
                              <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                              Footwear Item 2
                            </a>
                            <p aria-hidden="true" className="mt-1">Shop now</p>
                          </div>
                        </div>
                      </div>
                      {/* List Below Images */}
                      <div>
                        <p className="font-medium text-gray-900 mb-4">Footwear</p>
                        <ul className="flex flex-col space-y-4">
                          {footwearItems.map((item, index) => (
                            <li key={index} className="flow-root">
                              <a
                                href="#"
                                className="-m-2 p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-start"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  {/* Accessories Content */}
                  {isAccessoriesOpen && (
                    <div className="flex flex-col w-full">
                      {/* Images Row */}
                      <div className="flex flex-row gap-x-8 mb-8">
                        <div className="flex-none">
                          {/* Replace with actual image URLs */}
                          <div className="group relative text-sm">
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg" alt="Accessories Image 1" className="object-cover object-center w-full h-full" />
                            </div>
                            <a href="#" className="mt-6 block font-medium text-gray-900">
                              <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                              Accessories Item 1
                            </a>
                            <p aria-hidden="true" className="mt-1">Shop now</p>
                          </div>
                        </div>
                        <div className="flex-none">
                          {/* Replace with actual image URLs */}
                          <div className="group relative text-sm">
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg" alt="Accessories Image 2" className="object-cover object-center w-full h-full" />
                            </div>
                            <a href="#" className="mt-6 block font-medium text-gray-900">
                              <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                              Accessories Item 2
                            </a>
                            <p aria-hidden="true" className="mt-1">Shop now</p>
                          </div>
                        </div>
                      </div>
                      {/* List Below Images */}
                      <div>
                        <p className="font-medium text-gray-900 mb-4">Accessories</p>
                        <ul className="flex flex-col space-y-4">
                          {accessoriesItems.map((item, index) => (
                            <li key={index} className="flow-root">
                              <a
                                href="#"
                                className="-m-2 p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-start"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer Section */}
              <div className="p-4 text-gray-900 dark:text-white flex flex-col items-start">
                <div className='border-t border-gray-200 w-full flex flex-row items-center px-4 gap-4'>
                  <CiUser className="w-6 h-6 gap-4" />
                  <a
                    href="/login"
                    className="flex items-center p-4 flex-row text-sm font-medium"
                  >
                    Sign In / Log In
                  </a>
                </div>
                <div className='border-t border-gray-200 w-full flex flex-row px-4 gap-4'>
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
        <div className="fixed inset-x-0 z-10 bg-white dark:bg-gray-800 p-4 shadow-lg">
          <input
            type="text"
            className="block w-full p-2 text-sm text-black border border-black bg-gray-50"
            placeholder="Search..."
          />
        </div>
      )}
    

      {/* Cart Sidebar
      {isCartOpen && (
        <Cart />
      )} */}
    </div>

  );
}

export default NavBar;
