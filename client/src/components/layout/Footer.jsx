import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-green-600">AgriSmart 🌿</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
            Empowering farmers with smart agricultural solutions.
            High-quality seeds, fertilizers, and modern farming tools.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
            <li className="hover:text-green-600 cursor-pointer">Home</li>
            <li className="hover:text-green-600 cursor-pointer">Products</li>
            <li className="hover:text-green-600 cursor-pointer">Cart</li>
            <li className="hover:text-green-600 cursor-pointer">Login</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Categories
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
            <li className="hover:text-green-600 cursor-pointer">Seeds</li>
            <li className="hover:text-green-600 cursor-pointer">Fertilizers</li>
            <li className="hover:text-green-600 cursor-pointer">Pesticides</li>
            <li className="hover:text-green-600 cursor-pointer">Tools</li>
            <li className="hover:text-green-600 cursor-pointer">Irrigation</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Contact Us
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
            <li>Email: support@agrismart.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: India</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-700 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} AgriSmart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
