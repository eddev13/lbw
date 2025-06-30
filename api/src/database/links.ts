import z from "zod";
import { createLinkSchema } from "../schemas/LinkSchema";

type Link = z.infer<typeof createLinkSchema>;

export const links: Link[] = [];
