import HeartBtn from "@/components/HeartBtn";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export default async function page({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="text-center px-4 pt-16">
      <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
      <p className="max-w-3xl mx-auto">{post.content}</p>

      <HeartBtn />
    </main>
  );
}
