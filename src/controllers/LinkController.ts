import { Request, Response } from "express";
import { createLinkSchema } from "../schemas/LinkSchema";

export const LinkController = {
  createLink: (req: Request, res: Response) => {
    // VALIDAÇÃO DOS DADOS
    const validation = createLinkSchema.safeParse(req.body);

    if (!validation.success) {
      res.status(400).json({
        error: validation.error.errors.map((err) => err.message),
      });
    }



    // USO DOS DADOS
    const { name, whatsapp, username } = req.body;
    console.log(whatsapp)

    res.status(201).json({
      message: "Link bio criado com sucesso",
      data: {
        name,
        whatsapp,
        username,
      },
    });
  },
};
