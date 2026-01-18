
export const API_URL = "http://localhost:3001";


export async function fetchBlogs() {
const res = await fetch(`${API_URL}/blogs`);
if (!res.ok) throw new Error("Failed to fetch blogs");
return res.json();
}


export async function fetchBlogById(id: string) {
const res = await fetch(`${API_URL}/blogs/${id}`);
if (!res.ok) throw new Error("Failed to fetch blog");
return res.json();
}


export async function createBlog(data: any) {
const res = await fetch(`${API_URL}/blogs`, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(data),
});
if (!res.ok) throw new Error("Failed to create blog");
return res.json();
}
