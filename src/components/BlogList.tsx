import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../api/Blogs";
import BlogCard from "./BlogCard";
import { Blog } from "../types/blog";

interface BlogListProps {
  onSelect: (id: number) => void;
}

const BlogList = ({ onSelect }: BlogListProps) => {
  const { data, isLoading, error } = useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (isLoading) return (
    <p className="text-2xl font-bold text-gray-500 text-center mt-20">
      Loading blogs...
    </p>
  );
  if (error) return (
    <p className="text-2xl font-bold text-gray-500 text-center mt-20">
      Error fetching blogs
    </p>
  );

  return (
    <div className="space-y-4">
      {data?.map((blog) => (
        <BlogCard key={blog.id} blog={blog} onClick={() => onSelect(blog.id)} />
      ))}
    </div>
  );
};

export default BlogList;
