"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function updatePage() {
  revalidateTag("*");
  redirect("/");
}
