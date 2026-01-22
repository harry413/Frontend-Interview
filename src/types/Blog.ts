export interface Blog {
  id: number;
  title: string;
  category: string;
  description: string;
  date: string;
  content: string;
  coverImage: string;
}

export type CreateBlogPayload = Omit<Blog, "id">;
