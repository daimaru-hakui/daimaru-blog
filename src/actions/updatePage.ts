"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updatePage(categoryId: string = "", postId: string = "") {
  if (postId && categoryId) {
    revalidatePath(`/posts/${categoryId}/${postId}`);
    return
  }
  if (categoryId) {
    revalidatePath(`/posts/${categoryId}`);
    return
  }
  if (!postId && !categoryId) {
    revalidatePath("/");
    redirect("/")
}
}
