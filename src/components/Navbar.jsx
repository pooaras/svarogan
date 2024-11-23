import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Construction } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Construction className="h-8 w-8 text-yellow-500" />
            <span className="font-bold text-xl">SV Arowan Construction</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-yellow-500 transition">Home</Link>
            <Link to="/about" className="hover:text-yellow-500 transition">About Us</Link>
            <Link to="/products" className="hover:text-yellow-500 transition">Products</Link>
            <Link to="/contact" className="hover:text-yellow-500 transition">Contact</Link>
            <Link to="/enquiries" className="hover:text-yellow-500 transition">Enquiries</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 hover:bg-gray-800 rounded-md" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="block px-3 py-2 hover:bg-gray-800 rounded-md" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/products" className="block px-3 py-2 hover:bg-gray-800 rounded-md" onClick={() => setIsOpen(false)}>Products</Link>
            <Link to="/contact" className="block px-3 py-2 hover:bg-gray-800 rounded-md" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/enquiries" className="block px-3 py-2 hover:bg-gray-800 rounded-md" onClick={() => setIsOpen(false)}>Enquiries</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;