"use client";

import React, { useState, useEffect } from 'react';

export default function Example() {
  const testimonials = [
    {
      quote: "“These shoes are a game-changer! They're incredibly comfortable and stylish. I've received so many compliments since I started wearing them. Highly recommend to anyone looking for quality footwear!”",
      name: "Emily Carter",
      title: "Fashion Blogger",
    },
    {
      quote: "“As someone who's always on the go, I need shoes that can keep up with me. These are perfect! They offer great support and look fantastic with both casual and professional outfits.”",
      name: "James Lee",
      title: "Marketing Executive",
    },
    {
      quote: "“I absolutely love these shoes! The fit is perfect, and they're so comfortable that I can wear them all day without any discomfort. Plus, they look great with everything in my wardrobe.”",
      name: "Sophia Martinez",
      title: "Graphic Designer",
    },
    {
      quote: "“I was skeptical at first, but these shoes have exceeded my expectations. The craftsmanship is top-notch, and they feel incredibly durable. I’ve already recommended them to my friends!”",
      name: "Liam Thompson",
      title: "Software Developer",
    },
    {
      quote: "“These shoes are the perfect blend of comfort and style. Whether I'm at work or out with friends, they always make me feel confident and stylish. I’m definitely buying another pair!”",
      name: "Ava Johnson",
      title: "Content Creator",
    },
  ];
  

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const { quote, name, title, image } = testimonials[currentTestimonial];

  return (
    <>
    <h1 className='flex text-center m-4 justify-center text-amber-950 flex-grow font-bold text-[46px] leading-[54px]'>
     Testimonials from our clients and customers
    </h1>
    <section className="relative isolate overflow-hidden bg-white py-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-8">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>{quote}</p>
          </blockquote>
          <figcaption className="mt-10">
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">{name}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
    </>
  );
}
