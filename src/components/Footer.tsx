import React from 'react'

const Footer = () => {
  return (
    <footer className=" text-black bg-gradient-to-br from-gray-300 via-gray-400 to-orange-300 ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-black font-bold">
                CM
              </div>
              <span className="text-xl font-bold text-gray-900">CA MONK</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-900 hover:text-gray-800 ">
                  Tools
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:text-gray-800 ">
                  Practice
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-900 hover:text-gray-800 ">
                  Events
                </a>
              </li>

              <li>
                {" "}
                <a href="#" className="text-gray-900 hover:text-gray-800 ">
                  Job Board
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-900 hover:text-gray-800 ">
                  Points
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/contact-us"
                  className="text-gray-900 hover:text-gray-800 "
                >
                  Customer Service
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="text-gray-900 hover:text-gray-800 "
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="text-gray-900 hover:text-gray-800 "
                >
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="text-gray-900 hover:text-gray-800 "
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="text-gray-900 hover:text-gray-800 "
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-900 mb-4">
              Subscribe to our newsletter for exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 w-full text-brand"
              />
              <button className="bg-brand-accent text-gray-800 px-4 py-2 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-900 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Elegance. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-800 hover:text-gray-900 ">
              Terms
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-900 ">
              Privacy
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-900 ">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer