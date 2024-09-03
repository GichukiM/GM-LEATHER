"use client";

import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-8 px-4 md:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">CONTACT US</h1>
        <p className="mb-8">
          Welcome to MIRICO RI COLI, located in Nairobi, Kenya! We're dedicated to providing exceptional service and support to our valued customers. Whether you have questions about our products, need assistance with an order, or simply want to share your feedback, we're here to help. Feel free to reach out to us using any of the methods below:
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Email</h2>
          <p className="mb-4">Reach MIRICO RI COLI’s inbox at <a href="mailto:hey@miricoricoli.com" className="text-blue-500 hover:underline">hey@miricoricoli.com</a>. (Up to 48-hour reply time)</p>

          <h2 className="text-2xl font-semibold mb-2">Telephone</h2>
          <p className="mb-4">Give us a ring on <a href="tel:+2543330509604" className="text-blue-500 hover:underline">+254 3330509604</a>. Our customer service team is available Monday – Friday from 9:00 – 17:30 EAT.</p>

          <h2 className="text-2xl font-semibold mb-2">Live Chat/WhatsApp</h2>
          <p className="mb-4">Our customer service team is available from 9:00 – 18:00 EAT. You can also use WhatsApp to get in touch at <a href="https://wa.me/2543330509604" className="text-blue-500 hover:underline">+254 3330509604</a>.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message:</h2>
          <p className="mb-4">Have a question or comment? Fill out the form below, and one of our knowledgeable representatives will get back to you as soon as possible.</p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md p-2"
                rows="4"
                required
              />
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
