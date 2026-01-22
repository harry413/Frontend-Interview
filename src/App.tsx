import { Routes,Route } from "react-router-dom"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CreateBlog from "./components/CreateBlog";
import BlogDetails from "./components/BlogDetails";

import Home from "./pages/Home";

import { ImBlog } from "react-icons/im";
import BlogPage from "./pages/BlogPage";


const App = () => {
  return (
    <div className="h-screen w-full bg-gray-50">
      <Navbar />
      <div className="bg-gray-200 py-12 text-center border-b border-gray-200 mt-16 h-60 flex flex-col justify-center items-center">
        <ImBlog className=" text-center text-2xl" />
        <h1 className="text-4xl font-bold text-gray-900 mb-3">CA Monk Blog</h1>
        <p className="text-gray-600">
          Stay updated with the latest trends in finance, accounting, and career
          growth
        </p>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetails/>} />
        <Route path="/create-blog" element={<CreateBlog />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
