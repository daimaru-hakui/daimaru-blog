import PostList from "@/components/posts/post-list";
import { Posts } from "../page";



export default async function PostsPage() {
  const url = "https://jrk7rmu7lk.microcms.io/api/v1/blogs?limit=500";
  const res = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_API_KEY as string,
    },
    cache: "no-store"
  });

  const data: Posts = await res.json();
  console.log("data", data);
  return (
    <div className="mx-auto w-full max-w-[calc(750px)]">
      <PostList posts={data.contents} />
    </div>
  );
}
