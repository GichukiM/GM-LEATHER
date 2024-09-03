import React from 'react';
import NavBar from '../components/common/NavBar';

function page() {
  return (
    <>
        <NavBar />

        <div class="relative overflow-x-auto m-8">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-16 py-3">
                        Image
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Product
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Qty
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-t border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="p-4">
                            <img src="/Hero-2.jpg" class="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch"/>
                        </td>
                        <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            Shoes
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <button class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                    <span class="sr-only">Quantity button</span>
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                    </svg>
                                </button>
                                <div>
                                    <input type="number" id="first_product" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
                                </div>
                                <button class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                    <span class="sr-only">Quantity button</span>
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                                    </svg>
                                </button>
                            </div>
                        </td>
                        <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            Ksh 14,500
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="flex flex-col md:flex-row w-full justify-center space-y-4 md:space-y-0 md:space-x-4 p-8">
            {/* First Column */}
            <div className="flex-1 space-y-4">
                <div>
                <h2 className="text-xl font-semibold mb-4">Apply Coupon</h2>
                <div className="flex space-x-2">
                    <input
                    type="text"
                    placeholder="Enter Coupon Code"
                    className="flex-grow p-2 border"
                    />
                    <button
                    type="button"
                    className="px-4 py-2 flex justify-center text-sm font-semibold text-white bg-black border border-black hover:bg-white hover:text-black"
                    >
                    Apply
                    </button>
                </div>
                </div>
                <div>
                <h2 className="text-xl font-semibold mb-4">Add Note to Your Order</h2>
                <textarea
                    placeholder="Write your note here..."
                    className="w-full p-2 border"
                    rows="4"
                ></textarea>
                </div>
            </div>

            {/* Second Column */}
            <div className="relative overflow-x-auto shadow-md border border-black p-4 flex-1">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Cart Totals
                </caption>
                <tbody>
                    <tr className="bg-white border dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium border-r text-gray-900 whitespace-nowrap dark:text-white">
                        Cart Subtotal
                    </th>
                    <td className="px-6 py-4">
                        Ksh 14,500
                    </td>
                    </tr>
                    <tr className="bg-white border dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium border-r text-gray-900 whitespace-nowrap dark:text-white">
                        Shipping
                    </th>
                    <td className="px-6 py-4">
                        Ksh. 2,000
                    </td>
                    </tr>
                    <tr className="bg-white border dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium border-r text-gray-900 whitespace-nowrap dark:text-white">
                        Coupon Discount
                    </th>
                    <td className="px-6 py-4">
                        Ksh. 350
                    </td>
                    </tr>
                    <tr className="bg-white border dark:bg-gray-800">
                    <th scope="row" className="px-6 py-4 font-bold border-r text-gray-900 whitespace-nowrap dark:text-white">
                        Total
                    </th>
                    <td className="px-6 py-4">
                        Ksh 17,850
                    </td>
                    </tr>
                </tbody>
                </table>
                <a href="/checkout" className="flex py-4 p-5 mt-4 justify-center text-sm font-semibold text-white bg-black border border-black hover:bg-white hover:text-black">
                Proceed to Checkout
                </a>
            </div>

        </div>

    
    </>
  )
}

export default page