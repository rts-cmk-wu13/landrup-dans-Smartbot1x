import { z } from "zod"

export const loginSchema = z.object({
    Brugernavn: z.string().min(1, "Indtast en gyldig Brugernavn ."),
    password: z.string().min(4, "Password skal være mindst 4 karakterer.")
})