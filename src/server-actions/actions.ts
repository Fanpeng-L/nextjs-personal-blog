"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  console.log(title, content);

  //update database
  await prisma.post.create({
    data: { title, content },
  });

  //revalidate
  revalidatePath("/posts");

  //redirect
  redirect("/posts");
}
