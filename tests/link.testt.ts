// import request from "supertest";
// import app from "../src/app";
// import { prisma } from "../src/database/prismaClient";

// beforeAll(async () => {
//   await prisma.link.deleteMany();
// });

// afterAll(async () => {
//   await prisma.$disconnect();
// });

// const mockLink = {
//   name: "Usuário Teste",
//   whatsapp: "1199999999",
//   username: "test123",
// };

// describe("LinkController", () => {
//   it("DEVE CRIAR UM NOVO LINK", async () => {
//     const response = await request(app).post("/api/link").send(mockLink);

//     expect(response.status).toBe(201);
//     expect(response.body.data).toHaveProperty("id");
//     expect(response.body.data.username).toBe("test123");
//   });
// });

// describe("LinkController", () => {
//   it("DEVE LISTAR LINK", async () => {
//     const response = await request(app).get("/api/link");

//     expect(response.status).toBe(200);
//     expect(Array.isArray(response.body.data)).toBe(true);
//     expect(response.body.data.length).toBeGreaterThan(0);
//   });
// });

// describe("LinkController", () => {
//   it("DEVE BUSCAR UM LINK POR USERNAME", async () => {
//     const response = await request(app).get(`/api/link/${mockLink.username}`);

//     expect(response.status).toBe(200);
//     expect(response.body.data.username).toBe(mockLink.username);
//   });
// });

// describe("LinkController", () => {
//   const updated = {
//     name: "Nome Atualizado",
//     whatsapp: "1198888888",
//     username: "useratualizado",
//   };

//   it("DEVE ATUALIZAR UM LINK EXISTENTE", async () => {
//     const response = await request(app)
//       .put(`/api/link/${mockLink.username}`)
//       .send(updated);

//     expect(response.status).toBe(200);
//     expect(response.body.data.name).toBe(updated.name);
//     expect(response.body.data.username).toBe(updated.username);

//     mockLink.username = updated.username;
//   });
// });

// describe("LinkController", () => {
//   it("DEVE DELETAR UM LINK EXISTENTE", async () => {
//     const response = await request(app).delete(
//       `/api/link/${mockLink.username}`
//     );
//     expect(response.status).toBe(200);
//     expect(response.body.message).toBe("Link deletado com sucesso!");
//   });
// });
