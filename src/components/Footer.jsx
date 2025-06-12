import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-0">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-around items-center">
        {/* Left Section */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-2">Furniture</h3>
          <p className="text-sm">
            Premium furniture to elevate your living space.
          </p>
          <p className="text-xs mt-2">
            &copy; {new Date().getFullYear()} Furniture Inc. All rights
            reserved.
          </p>
        </div>

        {/* Middle Section: Links */}
        <div className="flex gap-8 mb-6 md:mb-0">
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="text-sm space-y-1">
              <li>
                <a href="#about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#service" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="text-sm space-y-1">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Warranty
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
