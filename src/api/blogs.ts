import { Blog } from "../types/Blog";

const BASE_URL = "http://localhost:3001/blogs";

// GET /blogs
export const getBlogs = async (): Promise<Blog[]> => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
};

// GET /blogs/:id
export const getBlogById = async (id: number): Promise<Blog> => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error("Blog not found");
  return res.json();
};

// POST /blogs
export const createBlog = async (blog: Blog): Promise<Blog> => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(blog)
  });

  if (!res.ok) throw new Error("Failed to create blog");
  return res.json();
};
