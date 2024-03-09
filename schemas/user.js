import { z } from "zod";

export const UserLoginSchema = z.object({
	email: z.string().email(),
	pw: z.string().min(4),
});
