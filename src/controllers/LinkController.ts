import { Request, Response } from "express";
import { createLinkSchema } from "../schemas/LinkSchema";
import { links } from "../database/links";

export const LinkController = {
  createLink: (req: Request, res: Response) => {
    // VALIDAÇÃO DOS DADOS
    const validation = createLinkSchema.safeParse(req.body);

    if (!validation.success) {
      res.status(400).json({
        error: validation.error.errors.map((err) => err.message),
      });
      return;
    }

    // USO DOS DADOS
    const { name, whatsapp, username } = validation.data;

    links.push({ name, whatsapp, username });

    res.status(201).json({
      message: "Link bio criado com sucesso",
      data: {
        name,
        whatsapp,
        username,
      },
    });
  },

  getLinks: (req: Request, res: Response) => {
    res.json(links);
  },
};
