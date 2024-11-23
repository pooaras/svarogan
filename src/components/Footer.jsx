import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SV Arowan Construction</h3>
            <p className="text-gray-400">Leading Steel Trading Company in Tamil Nadu</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+91 1234567890</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>info@svarowan.com</span>
              </p>
              <p className="flex gap-2">
                <MapPin className="mt-0" />
                <span>D NO 59-1, BAKKIYALAKSHMI NAGAR, VARATHAPPAMPALAYAM<br />
                SATHYAMANGALAM, Erode, Erode, 638401, Tamil Nadu, India</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <p className="text-gray-400">Monday - Saturday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-400">Sunday: Closed</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} SV Arowan Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;