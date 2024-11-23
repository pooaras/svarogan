import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Enquiries = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then(
          (result) => {
            console.log(result.text);
            alert('Enquiry sent successfully!');
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
            alert('Failed to send enquiry. Please try again.');
          }
        );
    }
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Product Enquiry</h1>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="user_phone"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Product Interest</label>
              <select
                name="product"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
              >
                <option value="">Select a product</option>
                <option value="steel">Steel Products</option>
                <option value="iron">Iron Products</option>
                <option value="copper">Copper Products</option>
                <option value="aluminium">Aluminium Products</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Quantity Required</label>
              <input
                type="text"
                name="quantity"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Additional Requirements</label>
              <textarea
                name="requirements"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enquiries;