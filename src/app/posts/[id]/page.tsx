export default async function page({ params }: { params: { id: string } }) {
  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const data = await response.json();

  return (
    <main className="text-center px-4 pt-16">
      <h1 className="text-5xl font-bold mb-6">{data.title}</h1>
      <p className="max-w-3xl mx-auto">{data.body}</p>
    </main>
  );
}
