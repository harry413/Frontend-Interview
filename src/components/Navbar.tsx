

const Navbar = () => {
  return (
    <header className="bg-gradient-to-br from-gray-800/20 via-gray-900/20 to-orange-200 fixed w-full z-10 top-0 right-0 left-0 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center justify-center space-x-2">
          <a
            href="/"
            className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-gray-800 font-bold"
          >
            CM
          </a>
          <span className="text-xl font-bold text-gray-900">CA MONK</span>
        </div>
        <div  className="flex items-center  justify-center space-x-6">
          <nav className="hidden md:flex space-x-8 text-md font-bold">
            <a href="/blog" className="text-gray-600 hover:text-gray-900 cursor-pointer">
              Latest Blogs
            </a>
            <a
              href="/create-blog"
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Add Blog
            </a>
          </nav>
          <button className="bg-indigo-200 text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-300 cursor-pointer">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar