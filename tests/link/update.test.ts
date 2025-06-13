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
  const updated = {
    name: "Nome Atualizado",
    whatsapp: "1198888888",
    username: "useratualizado",
  };

  it("DEVE ATUALIZAR UM LINK EXISTENTE", async () => {
    const response = await request(app)
      .put(`/api/link/${mockLink.username}`)
      .send(updated);

    expect(response.status).toBe(200);
    expect(response.body.data.name).toBe(updated.name);
    expect(response.body.data.username).toBe(updated.username);

    mockLink.username = updated.username;
  });
});
