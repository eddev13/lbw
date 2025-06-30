import request from "supertest";
import app from "../../src/app";

const mockLink = {
  name: "Usuário Teste",
  whatsapp: "1199999999",
  username: "test123",
};

describe("LinkController", () => {
  beforeEach(async () => {
    const response = await request(app).post("/api/link").send(mockLink);
  });

  it("DEVE DELETAR UM LINK EXISTENTE", async () => {
    const response = await request(app).delete(
      `/api/link/${mockLink.username}`
    );
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Link deletado com sucesso!");
  });
});
