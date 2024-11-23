import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const form = useRef(null);
  const [recipientEmail, setRecipientEmail] = useState('info@svarowan.com');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate recipient email and message
    if (!recipientEmail || !message) {
      alert('Please fill in both fields.');
      return;
    }

    const subject = 'Contact Inquiry';
    const body = encodeURIComponent(message); // Encode message for URL compatibility

    // Open the default email client with pre-filled data
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // Optionally, clear the form after submission
    setRecipientEmail('');
    setMessage('');
  };
  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then(
          (result) => {
            console.log(result.text);
            alert('Message sent successfully!');
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
            alert('Failed to send message. Please try again.');
          }
        );
    }
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-yellow-500" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+91 1234567890</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-yellow-500" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>info@svarowan.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-yellow-500" />
                <div>
                  <h3 className="font-semibold">Registered Office Address</h3>
                  <p>
                    D NO 59-1, BAKKIYALAKSHMI NAGAR, VARATHAPPAMPALAYAM<br />
                    SATHYAMANGALAM, Erode - 638401, Tamil Nadu, India
                  </p>
                </div>
              </div>
              {/* <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-yellow-500" />
                <div>
                  <h3 className="font-semibold">Local Address in India</h3>
                  <p>
                    D NO 59-1, BAKKIYALAKSHMI NAGAR, VARATHAPPAMPALAYAM<br />
                    SATHYAMANGALAM, Erode, Erode, 638401, Tamil Nadu, India
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            {/* <form ref={form} onSubmit={sendEmail} className="space-y-4">
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
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
              >
                Send Message
              </button>
            </form> */}
            <form onSubmit={handleSubmit} className="space-y-4">
            {/* Recipient Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Recipient's Email</label>
              <input
                type="email"
                  name="recipient_email"
                  disabled
                value={'info@svarowan.com'}
                onChange={(e) => setRecipientEmail(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
              />
            </div>

            {/* Message Text Area */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
            >
              Send Message
            </button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
