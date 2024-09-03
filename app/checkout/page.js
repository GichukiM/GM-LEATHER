"use client";
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa'; // For checkmarks

const CheckoutForm = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePreviousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className="flex p-24">
      {/* Left Side: Order Summary */}
      <div className="w-1/2 p-8 border-r">
        <h1 className="text-2xl font-bold mb-4">Company Name</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Total:</h2>
          <p className="text-2xl">$144.97</p>
        </div>
        <div className='p-8'>
          <p>Item 1 <span className="float-right">$49.99</span></p>
          <p>Item 2 <span className="float-right">$29.99</span></p>
          <p>Item 3 <span className="float-right">$34.99</span></p>
          <p>Item 4 <span className="float-right">$59.99</span></p>
        </div>
      </div>

      {/* Right Side: Checkout Progress */}
      <div className="w-1/2 p-16">
        {/* Progress Bar */}
        <div className="mb-6">
          <ul className="flex items-center justify-evenly">
            <li className={`flex items-center ${step > 1 ? 'text-green-500' : ''}`}>
              <span className={`w-8 h-8 flex items-center justify-center rounded-full border ${step > 1 ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                {step > 1 ? <FaCheck /> : '1'}
              </span>
              <span className={`w-1 h-1 bg-gray-200 mx-2 ${step > 1 ? 'bg-green-500' : ''}`}></span>
              <span className={`text-xs ${step > 1 ? 'font-bold text-green-500' : 'text-gray-500'}`}>Step 1</span>
            </li>
            <li className={`flex items-center ${step > 2 ? 'text-green-500' : ''}`}>
              <span className={`w-8 h-8 flex items-center justify-center rounded-full border ${step > 2 ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                {step > 2 ? <FaCheck /> : '2'}
              </span>
              <span className={`w-1 h-1 bg-gray-200 mx-2 ${step > 2 ? 'bg-green-500' : ''}`}></span>
              <span className={`text-xs ${step > 2 ? 'font-bold text-green-500' : 'text-gray-500'}`}>Step 2</span>
            </li>
            <li className={`flex items-center`}>
              <span className={`w-8 h-8 flex items-center justify-center rounded-full border ${step === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                {step === 3 ? '3' : ''}
              </span>
              <span className="w-1 h-1 bg-gray-200 mx-2"></span>
              <span className={`text-xs ${step === 3 ? 'font-bold text-blue-500' : 'text-gray-500'}`}>Step 3</span>
            </li>
          </ul>
        </div>

        {/* Step 1: Shipping Address */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <form>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label htmlFor="first-name" className="block">First Name *</label>
                  <input type="text" id="first-name" className="border w-full p-2" />
                </div>
                <div className="mb-4">
                  <label htmlFor="last-name" className="block">Last Name *</label>
                  <input type="text" id="last-name" className="border w-full p-2" />
                </div>
                <div className="mb-4">
                  <label htmlFor="address-line-1" className="block">Address Line 1 *</label>
                  <input type="text" id="address-line-1" className="border w-full p-2" />
                </div>
                <div className="mb-4">
                  <label htmlFor="address-line-2" className="block">Address Line 2</label>
                  <input type="text" id="address-line-2" className="border w-full p-2" />
                </div>
                <div className="mb-4">
                  <label htmlFor="city" className="block">City *</label>
                  <input type="text" id="city" className="border w-full p-2" />
                </div>
                <div className="mb-4">
                  <label htmlFor="state" className="block">State *</label>
                  <input type="text" id="state" className="border w-full p-2" />
                </div>
                <div className="mb-4">
                  <label htmlFor="zip" className="block">Zip / Postal Code *</label>
                  <input type="text" id="zip" className="border w-full p-2" />
                </div>
                <div className="mb-4">
                  <label htmlFor="country" className="block">Country *</label>
                  <input type="text" id="country" className="border w-full p-2" />
                </div>
              </div>
              <div className="mb-4">
                <input type="checkbox" id="use-for-payment" className="mr-2" />
                <label htmlFor="use-for-payment">Use this address for payment details</label>
              </div>
              <div className="flex justify-between space-x-2">
                <a href='/cart' type="button" className="flex py-4 p-5 mt-4 justify-center text-sm font-semibold text-white bg-black border border-black hover:bg-white hover:text-black">Go Back to Cart</a>
                <button type="button" onClick={handleNextStep} className="flex py-4 p-5 mt-4 justify-center text-sm font-semibold text-white bg-black border border-black hover:bg-white hover:text-black">Next</button>
              </div>
            </form>
          </div>
        )}


        {/* Step 2: Payment Details */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
            <div className="mb-4">
              <button type="button" onClick={() => handlePaymentMethodChange('card')} className={`px-4 py-2 mr-2 ${paymentMethod === 'card' ? 'bg-gray-300' : 'bg-gray-100'}`}>Card</button>
              <button type="button" onClick={() => handlePaymentMethodChange('mpesa')} className={`px-4 py-2 ${paymentMethod === 'mpesa' ? 'bg-gray-300' : 'bg-gray-100'}`}>Mpesa</button>
            </div>
            {paymentMethod === 'card' && (
              <div>
                <form>
                  <div className="mb-4">
                    <label htmlFor="card-number" className="block">Card number *</label>
                    <input type="text" id="card-number" className="border w-full p-2" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="cvv" className="block">CVV *</label>
                    <input type="text" id="cvv" className="border w-full p-2" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="card-name" className="block">Name on card *</label>
                    <input type="text" id="card-name" className="border w-full p-2" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="expiration-date" className="block">Expiration date *</label>
                    <input type="text" id="expiration-date" className="border w-full p-2" />
                  </div>
                  <div className="mb-4">
                    <input type="checkbox" id="remember-card" className="mr-2" />
                    <label htmlFor="remember-card">Remember credit card details for next time</label>
                  </div>
                </form>
              </div>
            )}
            {paymentMethod === 'mpesa' && (
              <div>
                <form>
                  <div className="mb-4">
                    <label htmlFor="mpesa-name" className="block">Name *</label>
                    <input type="text" id="mpesa-name" className="border w-full p-2" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone-number" className="block">Phone Number *</label>
                    <input type="text" id="phone-number" className="border w-full p-2" />
                  </div>
                  <div className="mb-4">
                    <input type="checkbox" id="remember-mpesa" className="mr-2" />
                    <label htmlFor="remember-mpesa">Remember Mpesa details for next time</label>
                  </div>
                </form>
              </div>
            )}
            <div className="flex justify-between">
              <button type="button" onClick={handlePreviousStep} className="flex py-4 p-5 mt-4 justify-center text-sm font-semibold text-white bg-black border border-black hover:bg-white hover:text-black">Previous</button>
              <button type="button" onClick={handleNextStep} className="flex py-4 p-5 mt-4 justify-center text-sm font-semibold text-white bg-black border border-black hover:bg-white hover:text-black">Next</button>
            </div>
          </div>
        )}

        {/* Step 3: Review Your Order */}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Review Your Order</h2>
            <div className="mb-4">
              <h3 className="font-semibold">Products</h3>
              <p>4 selected</p>
              <p>$134.98</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Shipping</h3>
              <p>Plus taxes</p>
              <p>$9.99</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Total</h3>
              <p>$144.97</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Shipment details</h3>
              <p>John Smith</p>
              <p>1 MUI Drive, Reactville, Anytown, 99999, USA</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Payment details</h3>
              <p>Card type: Visa</p>
              <p>Card holder: John Smith</p>
              <p>Card number: **** **** **** 1234</p>
              <p>Expiry date: 04/2024</p>
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={handlePreviousStep} className="flex py-4 p-5 mt-4 justify-center text-sm font-semibold text-white bg-black border border-black hover:bg-white hover:text-black">Previous</button>
              <button type="button" className="flex py-4 p-5 mt-4 justify-center text-sm font-semibold text-white bg-black border border-black hover:bg-white hover:text-black">Place Your Order</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
