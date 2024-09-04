"use client";

import { useState } from 'react';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/footer';

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+254700000000',
    address: '1234 Nairobi, Kenya',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the update logic here, like sending data to the server
    console.log('User Info Updated:', userInfo);
  };

  return (
    <>
      <NavBar />
      <section className="relative flex min-h-screen items-center justify-center bg-gray-100" style={{ backgroundImage: `url(/Hero-1.jpg)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover` }}>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative container mx-auto px-4">
          <div className="flex flex-col-reverse items-center justify-center">

          <div className='w-full lg:w-1/2'>
              <h2 className="text-2xl font-semibold mb-4 text-white">Update Your Information:</h2>

              <form onSubmit={handleSubmit} className="gap-4">
                <div className="col-span-1">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={userInfo.name}
                    onChange={handleChange}
                    className="block w-full border border-white p-2 bg-transparent text-white"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleChange}
                    className="block w-full border border-white p-2 bg-transparent text-white"
                    required
                  />
                </div>
                <div className="">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={userInfo.phone}
                    onChange={handleChange}
                    className="block w-full border border-white p-2 bg-transparent text-white"
                    required
                  />
                </div>
                <div className="">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-200 mb-1">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={userInfo.address}
                    onChange={handleChange}
                    className="block w-full border border-white p-2 bg-transparent text-white"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="flex py-4 p-5 mt-4 justify-center text-sm font-semibold text-white bg-black border border-white hover:bg-white hover:text-black"
                  >
                    Update Info
                  </button>
                </div>
              </form>
            </div>

            <div className='w-full lg:w-1/2 flex flex-col justify-center px-6 py-12'>
              <h1 className="text-3xl font-bold mb-4 text-white">USER DASHBOARD</h1>
              <p className="mb-8 text-white">
                Welcome to your dashboard! Here you can update your personal information to ensure your account is up to date. 
                Keep your details current for a seamless experience with our services.
              </p>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Dashboard;
