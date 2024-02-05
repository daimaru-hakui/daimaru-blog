import PostShow from "@/components/posts/post-show";
import { Post } from "@/types";

interface PostShowPageProps {
  params: {
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {

  const url = `https://jrk7rmu7lk.microcms.io/api/v1/blogs/${params.postId}`;
  const res = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_API_KEY as string,
    },
    cache: "no-store"
  });

  const data: any = await res.json();

  return (
    <div className="mx-auto w-full max-w-[calc(750px)]">
      <PostShow post={data} />
    </div>
  );
}
