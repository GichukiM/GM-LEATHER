import React from 'react';

const products = [
  {
    name: 'Oxford and Derbies',
    image: '/Hero-1.jpg',
  },
  {
    name: 'Monk Straps',
    image: '/Hero-2.jpg',
  },
  {
    name: 'Loafers and Slip-Ons',
    image: '/Hero-3.jpg',
  },
  {
    name: 'Boots',
    image: '/Hero-1.jpg',
  },
  {
    name: 'Mules and Sandles',
    image: '/Hero-2.jpg',
  },
  {
    name: 'Accessories',
    image: '/Hero-3.jpg',
  },
];

export default function ProductGrid() {
  return (
    <>
     <h1 className='flex text-center m-4 justify-center text-amber-950 flex-grow font-bold text-[46px] leading-[54px]'>
     MIRICO RI COLI COLLECTION
    </h1>
    <p className='flex text-center m-4 justify-center flex-grow text-[#465b52] text-[16px] my-[15px]'>
    Elevate Your Style with Premium Leather Shoes and Accessories from MIRICO RI COLI
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8">
      {products.map((product, index) => (
        <div key={index} className="relative group">
          <div
            className="w-full h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${product.image})` }}
          >
            <div className="absolute inset-0 flex flex-col justify-end items-start p-4 bg-gradient-to-t from-black to-transparent">
              <p className="text-white text-xl font-semibold">{product.name}</p>
              <button className="mt-2 px-4 py-2 text-black bg-white hover:bg-transparent hover:text-white hover:border-white hover:border">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
