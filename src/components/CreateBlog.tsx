import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "../api/blogs";
import { CreateBlogPayload } from "../types/blog";
import { Button } from "@/components/ui/button";

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
      coverImage: form.coverImage.value,
    };

    mutation.mutate(payload);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input name="title" placeholder="Title" className="input" />
      <input name="category" placeholder="Category" className="input" />
      <input
        name="coverImage"
        placeholder="Cover Image URL"
        className="input"
      />
      <textarea
        name="description"
        placeholder="Description"
        className="input"
      />
      <textarea name="content" placeholder="Content" className="input" />
      <Button type="submit">Create Blog</Button>
    </form>
  );
};

export default CreateBlog;
