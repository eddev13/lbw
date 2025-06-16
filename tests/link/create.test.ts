import request from "supertest";
import app from "../../src/app";

describe("LinkController", () => {
  const mockLink = {
    name: "Usuário Teste",
    whatsapp: "1199999999",
    username: "test123",
  };

  it("DEVE CRIAR UM NOVO LINK", async () => {
    const response = await request(app).post("/api/link").send(mockLink);

    expect(response.status).toBe(201);
    expect(response.body.data).toHaveProperty("id");
    expect(response.body.data.username).toBe("test123");
  });
});
