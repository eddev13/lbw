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

  it("DEVE LISTAR LINK", async () => {
    const response = await request(app).get("/api/link");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
    expect(response.body.data.length).toBeGreaterThan(0);
  });
});
