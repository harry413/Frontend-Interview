import { motion } from "motion/react"

type Props = {
  blog: any;
  onClick: () => void;
  isActive: boolean;
};

export default function BlogCard({ blog, onClick, isActive }: Props) {
  return (
    <motion.div
        whileHover={{scale:1.01}}
        whileTap={{scae:0.95}}
        initial={{ opacity:0, x:-40 }}
        animate={{ opacity:1, x:0 }}
        exit={{ opacity:0, x:-50}}
        transition={{ duration:1.1}}
      onClick={onClick}
      className={`bg-white rounded-lg p-4 cursor-pointer transition-all border-2 shadow-md 
      ${
        isActive
          ? "border-indigo-500 shadow-md"
          : "border-gray-200 hover:border-gray-300"
      }`}
    >
      <h3 className="font-bold text-lg pb-4">{blog.title}</h3>
      <p className="text-sm ">{blog.description}</p>
      <ul className="flex items-center text-xs  py-2 font-bold lowercase text-gray-500 mt-2">
        {blog.category?.map((category: Any ) => (
                        <div className="flex items-center  mx-2 gap-2 bg-blue-100  rounded-md">
                          <li key={category} className="bg-muted px-2 py-1  gap-2 text-blue-600 text-center">
                            {category}
                        </li>
                        </div>
                      ))
                    }</ul>
    </motion.div>
  );
}