import { Request, Response } from "express";
import { createLinkSchema } from "../schemas/LinkSchema";
// import { links } from "../database/links";
import { prisma } from "../database/prismaClient";
import { string } from "zod";

export const LinkController = {
  createLink: async (req: Request, res: Response) => {
    const validation = createLinkSchema.safeParse(req.body);

    // if (!validation.success) {
    //   res.status(400).json({
    //     error: validation.error.errors.map((err) => err.message),
    //   });
    //   return;
    // }

    if (!validation.success) {
      console.log(validation.data);
      res.json({
        message: "Já existe esse email",
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
    } catch (error) {
      if (error instanceof Error && "code" in error) {
        const { code } = error;
        res.json({ message: `Código do Erro: ${code}` });
      }
    }
  },

  getLinks: (req: Request, res: Response) => {
    res.status(200).json({
      message: "Lista de Links",
      // data: links,
    });
  },
};
