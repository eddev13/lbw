import { Request, Response } from "express";
import { createLinkSchema } from "../schemas/LinkSchema";
import { updateLinkSchema } from "../schemas/UpdateLinkSchema";

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
      console.error(error);
      res.status(500).json({
        error: "Erro interno no servidor",
      });
      return;
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
      return;
    }
  },

  getLinkByUsername: async (req: Request, res: Response) => {
    const { username } = req.params;
    try {
      const link = await prisma.link.findUnique({
        where: { username },
      });

      if (!link) {
        res.status(404).json({ error: "Link não encontrado" });
        return;
      }

      res.status(200).json({ data: link });
      return;
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar Link" });
      return;
    }
  },

  updateLink: async (req: Request, res: Response) => {
    const { username } = req.params;

    const validation = updateLinkSchema.safeParse(req.body);

    if (!validation.success) {
      res.status(400).json({
        error: validation.error.errors.map((err) => err.message),
      });
      return;
    }

    try {
      const existingLink = await prisma.link.findUnique({
        where: { username },
      });

      if (!existingLink) {
        res.status(404).json({ error: "Link não encontrado" });
        return;
      }

      const { name, whatsapp, username: newUsername } = validation.data!;

      const updateLink = await prisma.link.update({
        where: { username },
        data: {
          name,
          whatsapp,
          username: newUsername,
        },
      });

      res.status(200).json({
        message: "Link atualizado com sucesso",
        data: updateLink,
      });
      return;
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao atualiar link" });
      return;
    }
  },

  deleteLink: async (req: Request, res: Response) => {
    const { username } = req.params;

    try {
      const existingLink = await prisma.link.findUnique({
        where: { username },
      });

      if (!existingLink) {
        res.status(404).json({ error: "Link não encontrado" });
        return;
      }

      const deletedLink = await prisma.link.delete({
        where: { username },
      });
      res.status(200).json({
        message: "Link deletado com sucesso!",
        data: { deletedLink },
      });
      return;
    } catch (error) {
      console.error(error);
      res.status(404).json({
        error: "Link não encontrado",
      });
      return;
    }
  },
};
