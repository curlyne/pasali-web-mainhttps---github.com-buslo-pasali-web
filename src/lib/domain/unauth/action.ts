"use server";

import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

type PerformLoginResponse = { message: string | null };

export async function performLogin(
  initial: any,
  request: FormData,
): Promise<PerformLoginResponse> {
  const body = requirementPerformLogin.safeParse({
    email: request.get("email"),
    event: request.get("event"),
  });

  if (body.success) {
    await new Promise((resolve) => setTimeout(resolve, 100));

    cookies().set("access", "testing");
    cookies().set("refresh", "testing refresh");

    revalidatePath("/app", "layout");
    redirect("/app");
  } else {
    return { message: "There are missing or incorrect fields." };
  }
}

export async function performLogout() {
  await new Promise((resolve) => setTimeout(resolve, 100));

  cookies().delete("access");
  cookies().delete("refresh");

  revalidatePath("/app", "layout");
  redirect(`/app`);
}

const requirementPerformLogin = z.object({
  email: z.string().email(),
});
