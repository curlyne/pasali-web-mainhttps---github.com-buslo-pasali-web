import { database } from "@/lib/repository/database";
import { resolveEventSlugFromDomain } from "@/lib/repository/event";
import { cookies } from "next/headers";

export async function fetchDomain(): Promise<Domain> {
  const event = await database.userEvent.findFirst({
    where: { slug: resolveEventSlugFromDomain() },
    select: {
      slug: true,
      name: true,
    },
  });

  if (!event) {
    throw new Error("No event found.");
  }

  return event;
}

export async function fetchAccess(): Promise<boolean> {
  return resolveSession();
}

interface Domain {
  slug: string;
  name: string;
}

export async function resolveSession() {
  const session = cookies().get("access");

  return !!session;
}
