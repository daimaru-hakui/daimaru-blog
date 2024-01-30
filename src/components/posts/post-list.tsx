import PostShow from "./post-show";

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
    <div className="mt-12 mb-6 px-4">
      {posts.map((post) => (
        <PostShow key={post.id} post={post} />
      ))}
    </div>
  );
}
