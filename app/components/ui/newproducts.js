import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: '/Hero-1.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: '/Hero-2.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: '/Hero-3.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: '/Hero-3.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
];

export default function NewProducts() {
  return (
    <>
      <h1 className='flex text-center m-4 justify-center text-amber-950 flex-grow font-bold text-[46px] leading-[54px]'>
        Featured New Products
      </h1>
      <p className='flex text-center m-4 justify-center flex-grow text-[#465b52] text-[16px] my-[15px]'>
        Winter collections New Modern Design
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 md:p-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full max-w-xs mx-auto bg-white border border-green-100 shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href={product.href}>
                <img
                  className="border w-full"
                  src={product.imageSrc}
                  alt={product.imageAlt}
                />
              </a>
              <div className="px-4 pb-5">
                <a href={product.href}>
                  <h5 className="text-lg md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.name}
                  </h5>
                </a>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl md:text-2xl font-bold text-green-600">
                      {product.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={product.href}
                      className="bg-white border border-black rounded-full p-2"
                    >
                      <ShoppingCartIcon className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
