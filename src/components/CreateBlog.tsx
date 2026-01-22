import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "../api/blogs";
import { CreateBlogPayload } from "../types/blog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const CreateBlog = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: CreateBlogPayload) => createBlog(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const payload: CreateBlogPayload = {
      title: form.title.value,
      category: form.category.value,
      description: form.description.value,
      content: form.content.value,
      date: new Date().toISOString(),
      coverImage: form.coverImage.value,
    };

    mutation.mutate(payload);
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 py-10 h-screen bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 px-8"
    >
      <h1 className="py-8 text-3xl text-center font-bold">Create a new blog</h1>
      <div className="max-w-3xl mx-auto gap-4 flex flex-col">
        <Input name="title" placeholder="Title" className="input" />
        <Input name="category" placeholder="Category" className="input" />
        <Input
          name="coverImage"
          placeholder="Cover Image URL"
          className="input"
        />
        <Textarea
          name="description"
          placeholder="Description"
          className="input"
        />
        <Textarea name="content" placeholder="Content" className="input" />
        <Button type="submit">Create Blog</Button>
      </div>
    </form>
  );
};

export default CreateBlog;
