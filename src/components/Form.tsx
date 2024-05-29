import { createPost } from "@/server-actions/actions";

export default function Form() {
  return (
    <form
      action={createPost}
      className="flex flex-col max-w-2xl mx-auto my-10 gap-4"
    >
      <input
        type="text"
        name="title"
        placeholder="Title for a new post"
        className="border rounded w-80 p-1.5 mr-3"
        required
      />
      <textarea
        name="content"
        placeholder="New post content"
        rows={8}
        className="border required p-1.5 rounded"
      />
      <button className="w-28 m-auto bg-stone-200 hover:bg-cyan-500 hover:text-stone-100 rounded-md text-stone-600 font-semibold py-1 px-6">
        Add
      </button>
    </form>
  );
}
