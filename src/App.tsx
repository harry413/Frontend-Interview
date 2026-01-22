import Home from "./pages/Home";
import { ImBlog } from "react-icons/im";

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-50">
      <header className="bg-gradient-to-br from-gray-800/20 via-gray-900/20 to-orange-200 fixed w-full z-10 top-0 right-0 left-0 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-gray-800 font-bold">
              CM
            </div>
            <span className="text-xl font-bold text-gray-900">CA MONK</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-md font-bold">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Tools
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Practice
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Events
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Job Board
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Points
            </a>
          </nav>
          <button className="bg-indigo-600 text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">
            Profile
          </button>
        </div>
      </header>
      <div className="bg-gray-200 py-12 text-center border-b border-gray-200 mt-16 h-60 flex flex-col justify-center items-center">
        <ImBlog className=" text-center text-2xl"/>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">CA Monk Blog</h1>
        <p className="text-gray-600">
          Stay updated with the latest trends in finance, accounting, and career
          growth
        </p>
      </div>
      <Home />

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
    </div>
  );
};

export default App;
