"use client";

import React, { useState, useEffect } from 'react';

export default function Example() {
  const testimonials = [
    {
      quote: "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
      name: "Judith Black",
      title: "CEO of Workcation",
    },
    {
      quote: "“Dolore molestiae rem nesciunt distinctio esse provident natus obcaecati. Aut, id omnis cumque unde aliquid doloremque optio veniam magni!”",
      name: "Michael Scott",
      title: "Regional Manager at Dunder Mifflin",},
    {
      quote: "“Aliquid doloremque, commodi quo corporis adipisci, perferendis eos pariatur, consectetur facilis debitis nobis dolore odit dolorum velit laudantium fugiat.”",
      name: "Pam Beesly",
      title: "Receptionist at Dunder Mifflin",
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
