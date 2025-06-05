import { Request, Response } from "express";
import { createLinkSchema } from "../schemas/LinkSchema";
import { links } from "../database/links";
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
  },

  getLinks: (req: Request, res: Response) => {
    res.status(200).json({
      message: "Lista de Links",
      data: links,
    });
  },
};
