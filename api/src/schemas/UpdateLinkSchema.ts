import z from "zod";

export const updateLinkSchema = z.object({
  name: z
    .string()
    .min(2, "Nome precisa ter pelo menos 2 caracteres!")
    .optional(),
  whatsapp: z
    .string()
    .regex(/^\d{10,15}$/, "WhatsApp deve conter entre 10 e 15 números!")
    .optional(),
  username: z
    .string()
    .min(3, "Username precisa ter pelo menos 3 caracteres!")
    .optional(),
});
