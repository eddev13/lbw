import request from "supertest";
import app from "../../src/app";

describe("LinkController", () => {
  const mockLink = {
    name: "Usuário Teste",
    whatsapp: "1199999999",
    username: "test123",
  };

  beforeEach(async () => {
    const response = await request(app).post("/api/link").send(mockLink);
  });

  it("DEVE BUSCAR UM LINK POR USERNAME", async () => {
    const response = await request(app).get(`/api/link/${mockLink.username}`);

    expect(response.status).toBe(200);
    expect(response.body.data.username).toBe(mockLink.username);
  });
});
