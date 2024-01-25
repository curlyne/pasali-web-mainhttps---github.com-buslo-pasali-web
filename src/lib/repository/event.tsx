import { database } from "@/lib/repository/database";
import { headers } from "next/headers";

export function resolveEventSlugFromDomain() {
  const host = headers().get("host");

  if (!host) {
    throw new Error("No host in header provided.");
  }

  let resolvedSlug: string;

  if (host.startsWith("localhost") && process.env.PASALI_DOMAIN) {
    resolvedSlug = process.env.PASALI_DOMAIN;
  } else {
    const result = /(?<domain>\S*?)\.\S*$/gm.exec(host);

    if (!result || !result.groups || !result.groups["domain"]) {
      throw new Error(`Invalid domain ${host} specified.`);
    }

    resolvedSlug = result.groups["domain"];
  }

  return resolvedSlug;
}

export async function getEvent() {
  return database.userEvent
    .findFirst({ where: { slug: resolveEventSlugFromDomain() } })
    .then((result) => result!!);
}
