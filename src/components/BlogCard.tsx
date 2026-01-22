
import { Blog } from "../types/blog";
import { Card, CardContent } from "@/components/ui/card";

interface BlogCardProps {
  blog: Blog;
  onClick: () => void;
}

const BlogCard = ({ blog, onClick }: BlogCardProps) => {

   const formatDate = (isoDate: string): string => {
     const date = new Date(isoDate);

     return date.toLocaleDateString("en-IN", {
       day: "2-digit",
       month: "short",
       year: "numeric",
     });
   };
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer hover:shadow-lg  transition bg-gradient-to-r from-white via-gray-100 to-gray-200  hover:from-gray-200 hover:via-gray-300 hover:to-gray-400 "
    >
      <CardContent className="p-4">
        <div className="flex itmes-center justify-between">
          
          <p className="text-xs text-blue-800 font-semibold">{blog.category[0]}</p>
          <p className="text-sm text-gray-500">
             {formatDate(blog.date)}
          </p>
        </div>
        <h3 className="text-lg font-semibold">{blog.title}</h3>
        <p className="text-sm text-gray-600">{blog.description}</p>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
