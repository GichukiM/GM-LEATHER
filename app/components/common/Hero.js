"use client";

import React from 'react';

function Hero() {
  return (
    <div className="relative flex items-center justify-start w-full h-screen p-4 bg-white sm:p-8 dark:bg-gray-800"
      style={{
        backgroundImage: 'url(/Hero-1.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 dark:bg-gray-900 dark:opacity-60" />
      
      <div className="relative max-w-md z-10">
        <h5 className="mb-4 text-4xl font-bold text-white dark:text-white">
          Trade-in Offer
        </h5>
        <h6 className="mb-4 text-2xl font-semibold text-yellow-300 dark:text-yellow-400">
          Super Value Deals
        </h6>
        <p className="mb-4 text-lg font-medium text-white dark:text-gray-400">
          On all products
        </p>
        <p className="mb-6 text-lg text-white dark:text-gray-400">
          Save more with coupons & up to 25% off!
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <a
            href="#"
            className="flex items-center justify-center w-full px-6 py-3 bg-amber-900 text-white py-2 px-4 border-white hover:bg-amber-950"
          >
            <div className="text-sm font-semibold">Shop Now</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
