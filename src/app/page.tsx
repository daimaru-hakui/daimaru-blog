import PostList from "@/components/posts/post-list";

export type Posts = {
  contents: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: String;
    revisedAt: string;
    title: string;
    content: string;
    eyecatch: {
      url: string;
      height: number;
      width: number;
    };
    category: {
      id: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      revisedAt: string;
      name: string;
    };
  }[];
  totalCount: number;
  offset: number;
  limit: number;
};

export default async function Home() {
  const url = "https://jrk7rmu7lk.microcms.io/api/v1/blogs?limit=100";
  const res = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_API_KEY as string,
    },
    cache: "no-store"
  });

  const data: Posts = await res.json();

  return (
    <div className="mx-auto w-full max-w-[calc(750px)]">
      <PostList posts={data.contents} />
    </div>
  );
}
