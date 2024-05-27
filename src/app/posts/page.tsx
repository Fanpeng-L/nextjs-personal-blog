import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "All posts",
};

export default function Page() {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>
    </main>
  );
}
