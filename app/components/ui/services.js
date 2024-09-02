import { FaTruck, FaShoppingCart, FaDollarSign, FaGift, FaSmile, FaHeadset } from 'react-icons/fa';

export default function CustomerAssurance() {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex items-center space-x-4">
          <div className="text-black rounded-full flex items-center justify-center text-xl">
            <FaTruck className='text-4xl'/>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Free Shipping Above $20,000</h4>
            <p className="text-gray-600">Enjoy free shipping on orders over $20,000. Shop now and save on delivery costs!</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-black rounded-full flex items-center justify-center text-xl">
            <FaShoppingCart className='text-4xl'/>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Online Order</h4>
            <p className="text-gray-600">Order online from the comfort of your home. It's fast, secure, and convenient!</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-black rounded-full flex items-center justify-center text-xl">
            <FaDollarSign className='text-4xl'/>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Save Money</h4>
            <p className="text-gray-600">Find the best deals and save on your favorite products. Check out our promotions!</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-black rounded-full flex items-center justify-center text-xl">
            <FaGift className='text-4xl'/>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Promotions</h4>
            <p className="text-gray-600">Stay tuned for exciting promotions and special offers that you don’t want to miss!</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-black rounded-full flex items-center justify-center text-xl">
            <FaSmile className='text-4xl'/>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Happy Sell</h4>
            <p className="text-gray-600">We ensure you have a pleasant shopping experience with us. Satisfaction guaranteed!</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-black rounded-full flex items-center justify-center text-xl">
            <FaHeadset className='text-4xl'/>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">24/7 Support</h4>
            <p className="text-gray-600">Our support team is available around the clock to assist you with any inquiries.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
