import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-100">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
              alt="Construction site"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-8 flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Building Tomorrow's Infrastructure Today
                </h1>
                <p className="text-xl mb-8">
                  Tamil Nadu's Leading Steel Trading Company
                </p>
                <Link 
                  to="/products"
                  className="inline-flex items-center bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
                >
                  View Our Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-4">Quality Products</h3>
            <p className="text-gray-600">Premium quality steel, iron, copper, and aluminium products.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-4">Expert Team</h3>
            <p className="text-gray-600">Experienced professionals dedicated to excellence.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-4">Timely Delivery</h3>
            <p className="text-gray-600">Reliable and punctual delivery services across Tamil Nadu.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;