import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Posts",
  description: "All posts",
};

export default async function Page() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await response.json();

  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">All Posts</h1>

      <ul>
        {data.posts.map((post) => (
          <li key={post.id} className="mb-4">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
