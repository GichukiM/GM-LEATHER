"use client";

import { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/footer';

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState('/Hero-1.jpg');
  const [activeSection, setActiveSection] = useState('details'); // State to track active section

  const images = [
    '/Hero-1.jpg',
    '/Hero-2.jpg',
    '/Hero-3.jpg',
    '/Hero-2.jpg',
  ];

  const handleImageClick = (image) => {
    const currentImage = selectedImage;
    setSelectedImage(image);

    const index = images.indexOf(image);
    if (index !== -1) {
      images[index] = currentImage;
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-8 py-12">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side: Images */}
          <div className="w-full lg:w-1/2 flex">
            <div className="flex flex-col space-y-2 mr-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-24 h-24 object-cover cursor-pointer ${
                    image === selectedImage ? 'border-2 border-black' : ''
                  }`}
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
            <div className="flex-1">
              <img
                src={selectedImage}
                alt="Selected Product"
                className="w-full h-auto object-cover cursor-pointer"
                onClick={() => handleImageClick(selectedImage)}
              />
            </div>
          </div>

          {/* Right Side: Product Details */}
          <div className="w-full lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
            <h1 className="text-3xl font-bold mb-2">Product Name</h1>
            <div className="flex items-center mb-4">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <StarIcon className="h-5 w-5 text-gray-300" />
              <span className="ml-2 text-gray-600">(120 Reviews)</span>
            </div>
            <p className="text-xl font-semibold text-gray-800 mb-4">Ksh. 14500</p>
            <p className="text-gray-600 mb-4">
              Description of the product goes here. This includes details about the product's features, materials, and any other relevant information.
            </p>

            <div className="mb-4">
              <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Select Shoe Size</h3>
              <ul className="flex flex-row flex-grow gap-2">
                <li>
                  <input type="radio" id="six" name="size" className="hidden peer" required />
                  <label htmlFor="six" className="inline-flex items-center p-4 text-black cursor-pointer hover:text-gray-600 peer-checked:text-amber-700 peer-checked:border-amber-700 bg-white border border-black">
                    <div className="block">
                      <div className="w-full text-lg font-semibold">6</div>
                    </div>
                  </label>
                </li>
                <li>
                  <input type="radio" id="seven" name="size" className="hidden peer" />
                  <label htmlFor="seven" className="inline-flex items-center p-4 text-black cursor-pointer hover:text-gray-600 peer-checked:text-amber-700 peer-checked:border-amber-700 bg-white border border-black">
                    <div className="block">
                      <div className="w-full text-lg font-semibold">7</div>
                    </div>
                  </label>
                </li>
                <li>
                  <input type="radio" id="eight" name="size" className="hidden peer" />
                  <label htmlFor="eight" className="inline-flex items-center p-4 text-black cursor-pointer hover:text-gray-600 peer-checked:text-amber-700 peer-checked:border-amber-700 bg-white border border-black">
                    <div className="block">
                      <div className="w-full text-lg font-semibold">8</div>
                    </div>
                  </label>
                </li>
                <li>
                  <input type="radio" id="nine" name="size" className="hidden peer" />
                  <label htmlFor="nine" className="inline-flex items-center p-4 text-black cursor-pointer hover:text-gray-600 peer-checked:text-amber-700 peer-checked:border-amber-700 bg-white border border-black">
                    <div className="block">
                      <div className="w-full text-lg font-semibold">9</div>
                    </div>
                  </label>
                </li>
                <li>
                  <input type="radio" id="ten" name="size" className="hidden peer" />
                  <label htmlFor="ten" className="inline-flex items-center p-4 text-black cursor-pointer hover:text-gray-600 peer-checked:text-amber-700 peer-checked:border-amber-700 bg-white border border-black">
                    <div className="block">
                      <div className="w-full text-lg font-semibold">10</div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <button className="flex justify-center px-3 py-1.5 text-lg font-semibold text-white bg-black border border-black hover:bg-white hover:text-black">
                Add to Cart
              </button>
            </div>

            <div className="space-y-2 border-t pt-6 mt-6">
              <p className="text-gray-600"> Cashback Guarantee</p>
              <p className="text-gray-600"> 24/7 Customer Support</p>
              <p className="text-gray-600"> Free Shipping on Orders Over Ksh. 20000</p>
            </div>
          </div>
        </div>

        {/* Buttons to switch between Comments and Product Details */}
        <div className="mt-8 flex justify-start space-x-4">
          <button
            className={`px-4 py-2 font-semibold ${activeSection === 'details' ? 'bg-black text-white' : 'bg-white text-black border border-black'}`}
            onClick={() => setActiveSection('details')}
          >
            Product Details
          </button>
          <button
            className={`px-4 py-2 font-semibold ${activeSection === 'comments' ? 'bg-black text-white' : 'bg-white text-black border border-black'}`}
            onClick={() => setActiveSection('comments')}
          >
            Comments
          </button>
        </div>

        {/* Conditionally render the content based on the active section */}
        <div className="mt-8 border p-4">
          {activeSection === 'details' ? (
            <div>
              <h2 className="text-2xl font-bold mb-4">Product Details</h2>
              <p className="text-gray-600">Detailed information about the product, its materials, features, etc.</p>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-4">Comments</h2>
              <div className="space-y-4">
                <div className="border-t p-4 rounded-md">
                  <p className="font-semibold">Jane Doe</p>
                  <p className="text-gray-600">
                    This is a great product! I love how it fits and the quality is top-notch.
                  </p>
                </div>
                <div className="border-t p-4 rounded-md">
                  <p className="font-semibold">John Smith</p>
                  <p className="text-gray-600">
                    The product is good, but the shipping took longer than expected.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
  {[
    {
      image: "/Hero-1.jpg",
      name: "Product 1",
      price: 10000,
    },
    {
      image: "/Hero-2.jpg",
      name: "Product 2",
      price: 12000,
    },
    {
      image: "/Hero-3.jpg",
      name: "Product 3",
      price: 14000,
    },
    {
      image: "/Hero-2.jpg",
      name: "Product 4",
      price: 16000,
    },
  ].map((product, index) => (
    <div key={index} className="relative group border overflow-hidden">
      <div
        className="w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        <div className="absolute inset-0 flex flex-col justify-end items-start p-4 bg-gradient-to-t from-black to-transparent">
          <h3 className="text-white text-xl font-semibold">{product.name}</h3>
          <p className="text-white">Ksh. {product.price}</p>
          <button className="mt-2 px-4 py-2 text-black bg-white hover:bg-transparent hover:text-white hover:border-white hover:border">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
      <Footer />
    </>
  );
}
