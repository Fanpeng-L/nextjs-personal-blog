"use client";

import { useState } from "react";

export default function HeartBtn() {
  const [like, setLike] = useState(false);

  return (
    <button
      onClick={() => setLike(!like)}
      className="bg-stone-200 hover:bg-cyan-500 hover:text-stone-100 rounded-md text-stone-600 py-1 px-4 mt-6"
    >
      {!like ? "❤️" : "Like"}
    </button>
  );
}
