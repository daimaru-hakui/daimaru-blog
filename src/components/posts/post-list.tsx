import { Card, CardBody } from "@nextui-org/react";
import PostShow from "./post-show";
import { format } from "date-fns";
import Link from "next/link";

interface PostList {
  posts: {
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
}

export default function PostList({ posts }: PostList) {
  return (
    <div className="grid gap-3 mt-12 mb-6 px-4">
      {posts.map((post) => (
        <Link
          href={`/posts/${post.category?.id}/${post.id}`}
          key={post.id}
          className=""
        >
          <Card className="w-full">
            <CardBody className="w-full flex flex-col sm:flex-row items-center gap-3">
              <div className="text-sm">{format(new Date(post.createdAt), "yyyy-MM-dd")}</div>
              <div className="truncate">{post.title}</div>
            </CardBody>
          </Card>
        </Link>
      ))}
    </div>
  );
}
