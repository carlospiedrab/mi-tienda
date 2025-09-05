import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient({
    log: ["query"]
});

export default prisma;