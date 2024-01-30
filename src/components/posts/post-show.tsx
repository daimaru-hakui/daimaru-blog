import { format } from "date-fns";

interface PostShow {
  post: {
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
  };
}
export default function PostShow({ post }: PostShow) {
  return (
    <div className="p-6 mb-12 w-full max-w-[calc(720px)] bg-white drop-shadow-sm rounded-lg">
      <div className="mt-2 text-2xl font-bold">{post.title}</div>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 mt-2 text-gray-700 text-xs">
        <div className="">
          投稿日:{format(new Date(post.createdAt), "yyyy-MM-dd")}
        </div>
        <div>
          カテゴリー:{post.category?.name}</div>
      </div>
      <div
        className="flex flex-col gap-5 mt-8"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
