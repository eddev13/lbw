import { Request, Response } from "express";
import { createLinkSchema } from "../schemas/LinkSchema";
import { prisma } from "../database/prismaClient";

export const LinkController = {
  createLink: async (req: Request, res: Response) => {
    const validation = createLinkSchema.safeParse(req.body);

    if (!validation.success) {
      res.status(400).json({
        error: validation.error.errors.map((err) => err.message),
      });
      return;
    }

    const { name, whatsapp, username } = validation.data;

    try {
      const newLink = await prisma.link.create({
        data: {
          name,
          whatsapp,
          username,
        },
      });

      res.status(201).json({
        message: "Link bio criado com sucesso",
        data: newLink,
      });
      return;
    } catch (error) {
      res.status(500).json({
        error: "Erro interno no servidor",
      });
    }
  },
  getLinks: async (req: Request, res: Response) => {
    try {
      const links = await prisma.link.findMany();
      res.status(200).json({ data: links });
      return;
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao listar links" });
    }
  },
};
