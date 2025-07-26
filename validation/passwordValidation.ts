import z from "zod";

export const passwordValidation = z
  .string()
  .min(8, {
    message: "Password length must be 8 characters",
  })
  .refine((val) => /[A-Z]/.test(val), {
    message: "Must contain an uppercase letter",
  })
  .refine((val) => /[a-z]/.test(val), {
    message: "Must contain a lowercase letter",
  })
  .refine((val) => /[0-9]/.test(val), { message: "Must contain a number" })
  .refine((val) => /[!@#$%^&*]/.test(val), {
    message: "Must contain a special character",
  });
