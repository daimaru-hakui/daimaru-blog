"use client"
import { Card, CardBody, Chip } from "@nextui-org/react";
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
  console.log(posts)
  return (
    <div className="grid gap-3 mb-6 w-full">
      {posts.map((post) => (
        <Link
          href={`/posts/${post.category?.id}/${post.id}`}
          key={post.id}
          className="block"
        >
          <Card className="w-full">
            <CardBody className="w-full flex flex-col sm:flex-row items-center gap-3">
              <div className="text-sm">{format(new Date(post.createdAt), "yyyy-MM-dd")}</div>
               <Chip color="success" variant="bordered">{post.category?.name}</Chip>
              <div className="truncate">{post.title}</div>
            </CardBody>
          </Card>
        </Link>
      ))}
    </div>
  );
}
