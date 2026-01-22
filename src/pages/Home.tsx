import { useState } from "react";
import BlogList from "../components/BlogList";
import BlogDetails from "../components/BlogDetails";

const Home = () => {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-3 h-screen overflow-hidden py-8 px-4 gap-4 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300">
      <div className="col-span-1 border-r p-4 overflow-y-auto no-scrollbar">
        <BlogList onSelect={setSelectedBlogId} />
      </div>

      <main className="col-span-2 overflow-y-auto no-scrollbar">
        <BlogDetails blogId={selectedBlogId} />
      </main>
    </div>
  );
};

export default Home;