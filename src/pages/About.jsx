import React from 'react';

const About = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About SV Arowan Construction</h1>
          <p className="text-xl text-gray-600">Leading Steel Trading Company in Tamil Nadu</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
              alt="Construction site"
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded with a vision to provide high-quality construction materials, SV Arowan Construction has grown to become one of Tamil Nadu's most trusted steel trading companies. Our commitment to excellence and customer satisfaction has made us a preferred choice in the construction industry.
            </p>
            <p className="text-gray-600">
              With years of experience in the industry, we have built strong relationships with our clients and suppliers, ensuring we deliver only the best products at competitive prices.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Quality</h3>
              <p className="text-gray-600">We never compromise on the quality of our products and services.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-600">We conduct our business with honesty and transparency.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">We constantly evolve to meet the changing needs of our customers.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-yellow-500 mb-2">500+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-yellow-500 mb-2">300+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-yellow-500 mb-2">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-yellow-500 mb-2">50+</h3>
              <p className="text-gray-600">Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
