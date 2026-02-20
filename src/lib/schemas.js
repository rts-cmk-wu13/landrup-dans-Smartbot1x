import { z } from "zod"

export const loginSchema = z.object({
    Brugernavn: z.string().min(1, "Indtast en gyldig Brugernavn ."),
    password: z.string().min(4, "Password skal være mindst 4 karakterer.")
})

export const newsletterSchema = z.object({
    email: z.string().min(1, "Indtast en email-adresse.").regex(
        /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i,
        "Indtast en gyldig email-adresse."
    ),
})