import { prisma } from "../../src/database/prismaClient";

beforeAll(async () => {
  await prisma.link.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});
