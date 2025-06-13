import request from "supertest";
import app from "../../src/app";
import { prisma } from "../../src/database/prismaClient";

beforeAll(async () => {
  await prisma.link.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});

const mockLink = {
  name: "Usuário Teste",
  whatsapp: "1199999999",
  username: "test123",
};

describe("LinkController", () => {
  it("DEVE BUSCAR UM LINK POR USERNAME", async () => {
    const response = await request(app).get(`/api/link/${mockLink.username}`);

    expect(response.status).toBe(200);
    expect(response.body.data.username).toBe(mockLink.username);
  });
});
