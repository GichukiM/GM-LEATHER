"use client";

import React, { useState } from "react";

const ReturnPolicy = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "What is your returns policy?",
      answer: [
        "If you are returning faulty goods, please contact our customer service team within 48 hours of receiving your items via your preferred contact method listed below.",
        "Any item you have accepted and then returned is your responsibility until it reaches our warehouse. Please ensure that you send your item back to us using a delivery service that insures you for the value of the items. You will need to obtain a proof of postage receipt when you return your items to us.",
        "Please note that in order for a return to be eligible, it must be in pristine condition and raised within 30 days of receipt. Please return the items in their original packaging with all tags intact and accessories included. Package the items securely and ensure our returns form is included inside. We are really sorry, but we're unable to accept back used items that are unsuitable or don't fit.",
        "We recommend you try your purchased item on before you use it outside and if there is an issue with size/fit then please follow the normal returns process."
      ]
    },
    {
      question: "Refunds",
      answer: [
        "All successful returns will be credited to the original method used for payment. The original shipping charges will not be refunded. We will notify you via email once we have processed your return.",
        "Please note once the refund is processed, it can take 3 to 5 working days to show into your account (dependent on your bank)."
      ]
    },
    {
      question: "Can I exchange an item?",
      answer: [
        "We are able to offer exchange services only when it is an exchange for the same item but in a different size. You can start the exchange process using our returns portal.",
        "If you require a different item/colour then please follow the usual returns procedure to return your item(s) and place a new order for the replacement.",
        "We aim to process all exchanges within 3 to 5 working days from the day of receiving your return."
      ]
    },
    {
      question: "What should I do if I receive an incorrect item?",
      answer: [
        "We have high standards when it comes to packaging your order, however mistakes do occur from time to time. Please accept our apologies if you have received an incorrect item. As part of our customer objectives, we will do our utmost to resolve your query with speed, ease, and with absolute minimal inconvenience.",
        "Please contact us via our Contact Us page. We'll need your order number and any pictures you have of the item received. A member of our team will review the details and offer the best resolution to resolve your query."
      ]
    },
    {
      question: "What should I do if my item is damaged or faulty?",
      answer: [
        "Although we take care to prevent any damage to your goods within our warehouses and during transit, it is possible that problems may arise. Please accept our apologies if you have received a damaged or faulty item.",
        "We ask that you do not refuse delivery; instead, accept the goods and contact us immediately. Refusal may actually result in a delay of the parcel being returned.",
        "In order to do this, we ask that you contact us through your account using our Contact Us page. Please provide details of the fault and provide pictures for our team to review.",
        "We are really sorry, but we're unable to accept back used items that are unsuitable or don't fit. An item that is deemed uncomfortable or an issue with size/fit after wear is unfortunately not classed as a fault. We recommend you try your purchased item indoors on a clean carpeted area before outside use, and if there is an issue with size/fit, then please follow the normal returns process."
      ]
    },
    {
      question: "Complaints",
      answer: [
        "If you are not satisfied with the way in which we have handled the return, replacement, or repair of any item, we want to hear about this. Please visit our Contact Us page and we'll aim to resolve the issue for you as soon as possible."
      ]
    },
    {
      question: "Your statutory rights",
      answer: [
        "Our Returns Policy does not affect your statutory rights. For more information about your other statutory rights, please visit the Government of Kenya’s website at: www.mygov.go.ke."
      ]
    }
]

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Return Policy</h1>

      <p className="mb-4">
        At MIRICO RI COLI, we take pride in the quality of our leather shoes. However, if for any reason you are not completely satisfied with your purchase, we offer a simple and easy return process.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Quick Returns</h2>
      <p className="mb-4">
        Please note that in order for a return to be eligible, it must be in pristine condition and raised within 28 days of receipt. If you are returning faulty goods, please contact our customer service team, which you can reach by clicking <a href="/contact-us" className="text-blue-500 hover:underline">HERE</a>.
      </p>

      <h3 className="text-xl font-medium mb-2">1. Register Your Return</h3>
      <p className="mb-4">
        Click <a href="/return-start" className="text-blue-500 hover:underline">HERE</a> to start your return. Order number and email must be entered exactly as seen on your order confirmation.
      </p>
      <p className="mb-4">
        If your order was placed on a partner website, please contact us directly.
      </p>

      <h3 className="text-xl font-medium mb-2">2. Post Your Return</h3>
      <p className="mb-4">
        Proceed through the portal and choose a carrier to fulfill your return. Ensure your items are securely wrapped, and your parcel contains all the requested information. Remember to ask for a receipt as proof of sending.
      </p>

      <h3 className="text-xl font-medium mb-2">3. We will Do The Rest</h3>
      <p className="mb-4">
        Once we have processed your return, you will receive notification via email or SMS. All successful returns will be credited to the original method used for payment. Please note refunds can take 3 to 5 working days (Monday to Friday, excluding public holidays) to reflect in your account.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Returns Costs</h2>
      <p className="mb-4">
        Please note for orders within Nairobi, there is no return charge on the first return; subsequent returns will be charged at KSh 300 per order, which will be deducted from the final refund.
      </p>
      <p className="mb-4">
        <span className="font-semibold">Customers outside Nairobi:</span> We do not offer free returns. You may be responsible for covering the cost of shipping the return to us.
      </p>

      <div>
        <h2
          className="text-2xl font-semibold mb-4 cursor-pointer flex justify-between items-center"
        >
          Returns Policy & FAQs
        </h2>
          <div className="accordion">
          {accordionData.map((item, index) => (
            <div key={index} className="accordion-item mb-4">
              <h3
                className="text-xl font-medium flex justify-between cursor-pointer mb-2 p-2"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
          <span>{toggleAccordion ? "-" : "+"}</span>
              </h3>
              {openIndex === index && (
                <div className="p-4 border border-black">
                  {item.answer.map((para, i) => (
                    <p key={i} className="mb-4">{para}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4 mt-6">Return Form</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-lg font-medium mb-1">
            Email Address or Phone Number
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full p-3 border border-black"
            placeholder="Enter email address or phone number"
            required
          />
        </div>

        <div>
          <label htmlFor="order-number" className="block text-lg font-medium mb-1">
            Order Number
          </label>
          <input
            type="text"
            id="order-number"
            name="order-number"
            className="w-full p-3 border border-black"
            placeholder="Enter order number"
            required
          />
        </div>

        <button
          type="submit"
          className="flex py-4 p-5 mt-4 justify-center text-sm font-semibold text-white bg-black border border-black hover:bg-white hover:text-black"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default ReturnPolicy;
