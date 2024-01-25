import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var database: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const database = globalThis.database ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.database = database;
