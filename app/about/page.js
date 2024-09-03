import React from 'react'
import NavBar from '../components/common/NavBar'
import Footer from '../components/common/footer'

function page() {
  return (
    <>
      <NavBar />
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>

        <div className="mb-8">
          <p className="text-lg mb-4">
            Welcome to our store! We specialize in crafting high-quality leather shoes, starting from the finest cow hide to the final exquisite footwear. Our journey begins on the farm, where we ethically source premium hides, and continues in our workshop, where skilled artisans transform them into durable and stylish shoes.
          </p>
          <img
            src="/Hero-1.jpg"
            alt="About Us Image 1"
            className="shadow-md mb-4"
          />
        </div>

        <div className="mb-8">
          <p className="text-lg mb-4">
            Our team is composed of experienced craftsmen and designers who are passionate about creating footwear that blends tradition with modern style. Each pair of shoes is carefully handcrafted, ensuring that every detail meets our high standards of quality and comfort.
          </p>
          <img
            src="/Hero-2.jpg"
            alt="About Us Image 2"
            className="shadow-md mb-4"
          />
        </div>

        <div className="mb-8">
          <p className="text-lg mb-4">
            We are committed to sustainability and ethical practices in every step of our process. By focusing on value addition from cow hide, we not only create beautiful shoes but also contribute to reducing waste and supporting our local economy. We are proud of the strong relationships we have built with our customers, who value our dedication to quality and craftsmanship.
          </p>
          <img
            src="/Hero-3.jpg"
            alt="About Us Image 3"
            className="shadow-md mb-4"
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page
