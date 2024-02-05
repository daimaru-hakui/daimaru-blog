import { Posts } from "@/app/page";
import PostList from "@/components/posts/post-list";

interface PostCategoryPageProps {
  params: {
    categoryId: string;
  };
}

export default async function PostCategoryPage({
  params,
}: PostCategoryPageProps) {
  const url = "https://jrk7rmu7lk.microcms.io/api/v1/blogs";
  const res = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_API_KEY as string,
    },
    cache: "no-store",
  });

  const data: Posts = await res.json();
  const posts = data.contents.filter(
    (content) => content.category?.id === params.categoryId
  );
  return (
    <div className="mx-auto w-full max-w-[calc(750px)]">
      <PostList posts={posts} />
    </div>
  );
}
