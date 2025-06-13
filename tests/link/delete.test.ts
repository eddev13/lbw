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
  it("DEVE DELETAR UM LINK EXISTENTE", async () => {
    const response = await request(app).delete(
      `/api/link/${mockLink.username}`
    );
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Link deletado com sucesso!");
  });
});
