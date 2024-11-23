import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Steel Products',
    image: 'https://images.unsplash.com/photo-1535074153497-b08c5aa9c236?q=80&w=2070&auto=format&fit=crop',
    description: 'High-quality structural steel for construction projects.',
    accentColor: 'bg-blue-500', // Steel - Blue accent
  },
  {
    id: 2,
    name: 'Iron Products',
    image: 'https://images.unsplash.com/photo-1605773527852-c546a8584ea3?q=80&w=2074&auto=format&fit=crop',
    description: 'Durable iron products for various applications.',
    accentColor: 'bg-red-500', // Iron - Red accent
  },
  {
    id: 3,
    name: 'Copper Products',
    image: 'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=2073&auto=format&fit=crop',
    description: 'Premium copper materials for electrical and plumbing needs.',
    accentColor: 'bg-orange-500', // Copper - Orange accent
  },
  {
    id: 4,
    name: 'Aluminium Products',
    image: 'https://images.unsplash.com/photo-1585828068970-7b75082485cd?q=80&w=2070&auto=format&fit=crop',
    description: 'Lightweight and versatile aluminium solutions.',
    accentColor: 'bg-green-500', // Aluminium - Green accent
  }
];

const Products = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              {/* Separate top-left border div with 15px height and unique color */}
              <div className={`absolute top-0 left-0 w-25 h-[15px] ${product.accentColor}`}></div>
              <div className="relative">
                {/* <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                /> */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link
                    to="/enquiries"
                    className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-400 transition"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
