import { useQuery } from "@tanstack/react-query";
import { HiHandThumbUp, HiHandThumbDown } from "react-icons/hi2";
import { IoMdShareAlt } from "react-icons/io";
import { getBlogById } from "../api/blogs";
import { Blog } from "../types/blog";

interface BlogDetailsProps {
  blogId: number | null;
}

const BlogDetails = ({ blogId }: BlogDetailsProps) => {
  const { data, isLoading, error } = useQuery<Blog>({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId!),
    enabled: !!blogId,
  });

  const formatDate = (isoDate: string): string => {
    const date = new Date(isoDate);

    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };


  if (!blogId) return <p className="text-4xl font-bold text-gray-400 text-center mt-20">Select a blog...</p>;
  if (isLoading) return <p className="text-4xl font-bold  text-gray-400 text-center mt-20">Loading blog...</p>;
  if (error) return <p className="text-4xl font-bold  text-gray-400 text-center mt-20">Error loading blog</p>;

  return (
    <div className="p-6 shadow-lg rounded-lg mx-4 my-6  bg-gradient-to-b from-gray-150 via-gray-250 to-gray-350">
      <img
        src={data?.coverImage}
        alt={data?.title}
        className="w-full h-60 object-cover rounded-t "
      />
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-blue-900 py-2 mt-4 font-bold">
          {data?.category.map((cat: string) => (
            <span key={cat} className="category-badge">
              {cat}
              <span> • </span>
            </span>
          ))}
        </p>
        <p className="text-sm text-gray-500">
          Published on {formatDate(data?.date)}
        </p>
      </div>
      <div className="flex items-center justify-between mt-2">
        <h1 className="text-2xl font-bold mt-2">{data?.title}</h1>
        <IoMdShareAlt className="text-2xl" />
      </div>
      <p className="mt-4 text-gray-700 whitespace-pre-line">{data?.content}</p>
      <div className="flex items-center justify-end gap-3 mt-6 text-2xl text-gray-600 pr-10 border-t border-gray-400 pt-4">
        <p className="text-sm text-gray-500"> Do you like the blog?</p>
        <HiHandThumbUp className="hover:text-green-800 cursor-pointer" />
        <HiHandThumbDown className="hover:text-red-800 cursor-pointer" />
      </div>
    </div>
  );
};

export default BlogDetails;
