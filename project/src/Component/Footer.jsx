import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white-800 text-grey">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
        {/* Grid 1: Amiso */}
        <div>
          <h2 className="text-xl font-bold mb-2">Amiso</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* Grid 2: Get in Touch */}
        <div>
          <h2 className="text-xl font-bold mb-2">Get in Touch</h2>
          <p>
            Address: 123 Main Street, City, Country
            <br />
            Email: contact@example.com
            <br />
            Phone: +123-456-7890
          </p>
        </div>

        {/* Grid 3: Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-2">Quick Links</h2>
          <div className="grid grid-cols-2 gap-2">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Portfolio</a>
            <a href="#" className="hover:underline">Careers</a>
          </div>
        </div>

        {/* Grid 4: Our Newsletter */}
        <div>
          <h2 className="text-xl font-bold mb-2">Our Newsletter</h2>
          <p>Subscribe to stay updated with our latest news and offers.</p>
          <div className="flex mt-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 flex-grow rounded-l-lg text-gray-800"
            />
            <button className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Divider and Footer Bottom Section */}
      <hr className="w-[80%] mx-auto border-t border-gray-700 mt-6" />
      <div className="flex justify-between items-center px-6 py-4 text-sm">
        <p className="text-gray-400">© 2023 Amiso. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-300">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
