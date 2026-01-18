import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {motion} from "motion/react"
import { fetchBlogs, fetchBlogById } from "../lib/api";
import BlogCard from "../components/BlogCard";
import { useEffect, useState } from "react";


export default function BlogPage() {
  const { id } = useParams();
  const [selectedId, setSelectedId] = useState<number | null>(id ? Number(id) : null);
  
  const {
    data: blogs,
    isLoading: blogsLoading,
    error: blogsError,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  
  const {
    data: selectedBlog,
    isLoading: blogLoading,
    error: blogError,
  } = useQuery({
    queryKey: ["blog", selectedId],
    queryFn: () => fetchBlogById(String(selectedId)),
    enabled: !!selectedId,
  });

  
  useEffect(() => {
    if (id){ setSelectedId(Number(id));}
  }, [id]);

  

  if (blogsLoading) return <p className="min-h-screen flex text-center items-center justify-center text-3xl text-gray-300 font-bold">Loading blogs...</p>;
  if (blogsError) return <p className="flex text-center items-center justify-center text-3xl text-gray-300 font-bold">Error loading blogs</p>;

  function getTimeAgo(isoTime) {
  const past = new Date(isoTime);
  const now = new Date();

  const diff = now - past;

  const seconds = Math.floor(diff / 1000);
  if (seconds < 60) return `${seconds} sec ago`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr ago`;

  const days = Math.floor(hours / 24);
  return `${days} days ago`;
}

  return (
    <div className="min-h-screen bg-gray-50 font-serif ">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
              CM
            </div>
            <span className="text-xl font-bold text-gray-900">CA MONK</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm">
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
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">
            Profile
          </button>
        </div>
      </header>
      {/* Hero Section */}
      <motion.div 
        initial={{opacity:0, x:80}}
        animate={{opacity:1,x:0}}
      className="bg-white py-12 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">CA Monk Blog</h1>
        <p className="text-gray-600">
          Stay updated with the latest trends in finance, accounting, and career
          growth
        </p>
      </motion.div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        {/* Blog List */}
        <div className="space-y-4 min-h-screen ">
          {blogs?.map((blog: any) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              onClick={() => setSelectedId(blog.id)}
              isActive={selectedId === blog.id}
            />
          ))}
        </div>

        {/* Blog Detail */}
        <div className="lg:col-span-2">
          {!selectedId && (
            <div className="text-muted-foreground h-full flex items-center justify-center">
              Select a blog to read
            </div>
          )}

          {blogLoading && <p className="text-center items-center text-3xl text-gray-300 font-bold mt-20">Loading blog...</p>}
          {blogError && <p className="text-center items-center text-3xl text-gray-300 font-bold mt-20">Error loading blog</p>}

          {selectedBlog && (
            <motion.div 
              initial={{ opacity:0, x:40 }}
              animate={{ opacity:1, x:0 }}
              exit={{ opacity:0, x:-50}}
              transition={{ duration:2}}
              className="space-y-6 font-serif">
              <img
                src={selectedBlog.coverImage}
                className="w-full h-[300px] opacity-70 overflow-hidden rounded-t-xl object-cover"
                 height={300}
              />
              
              <h1 className="text-3xl font-bold">{selectedBlog.title}</h1>
              <div className="text-sm text-muted-foreground bg-gray-100 flex items-center justify-between rounded-md lowercase font-semibold">
                <div className="flex p-1 rounded-md">
                    {selectedBlog.category?.map((category: Any ) => (
                         <div className="flex items-center mx-2 gap-2 bg-green-200  rounded-md">
                        <span key={category} className="bg-muted px-2 py-1 text-green-700">
                            {category}
                        </span>
                        </div>))
                    }
                </div>  
                    
                <div>{getTimeAgo(selectedBlog.time)}</div>
              </div>
              <p className="text-lg font-semibold">{selectedBlog.description}</p>
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />
              <div className="flex gap-2 flex-wrap">
                {selectedBlog.tags?.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs bg-muted px-2 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 cursor-pointer">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 cursor-pointer">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                      </svg>
                    </button>
                  </div>
                </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
