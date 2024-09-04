"use client";

import { useState } from 'react';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/footer';

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
    <>
      <NavBar />
      <section className="relative text-white flex min-h-screen items-center justify-center bg-gray-100" style={{ backgroundImage: `url(/Hero-1.jpg)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row">
            <div className='w-full lg:w-1/2 flex flex-col justify-center px-6 py-12'>
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
            </div>

            <div className='w-full lg:w-1/2'>
              <h2 className="text-2xl font-semibold mb-4">Send Us a Message:</h2>
              <p className="mb-4">Have a question or comment? Fill out the form below, and one of our knowledgeable representatives will get back to you as soon as possible.</p>

              <form onSubmit={handleSubmit} className="gap-4">
                <div className="col-span-1">
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full border border-white p-2 bg-transparent text-white placeholder-gray-400"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full border border-white p-2 bg-transparent text-white placeholder-gray-400"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="">
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="block w-full border border-white p-2 bg-transparent text-white placeholder-gray-400"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="">
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full border border-white p-2 bg-transparent text-white placeholder-gray-400"
                    placeholder="Your Message"
                    rows="4"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="flex py-4 p-5 mt-4 justify-center text-sm font-semibold text-white bg-black border border-white hover:bg-white hover:text-black"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
