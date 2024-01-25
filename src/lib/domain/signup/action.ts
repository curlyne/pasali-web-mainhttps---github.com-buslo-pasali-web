"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

type CreateEventResponse = { message: string | null };

export async function createEvent(
  initial: any,
  request: FormData,
): Promise<CreateEventResponse> {
  const body = requirementCreateEvent.safeParse({
    email: request.get("email"),
    event: request.get("event"),
  });

  if (body.success) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    redirect("/app");
  } else {
    return { message: "There are missing or incorrect fields." };
  }
}

const requirementCreateEvent = z.object({
  email: z.string().email(),
  event: z.string().min(4),
});
