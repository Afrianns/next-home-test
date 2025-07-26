import { z } from "zod";

export const usernameValidation = z.string().min(5, {
  message: "Username must be at least 5 characters.",
});
