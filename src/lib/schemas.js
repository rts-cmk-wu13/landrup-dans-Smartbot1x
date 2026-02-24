import { z } from "zod"

export const signupSchema = z.object({
    firstName: z.string().min(2, "Indtast mindst 2 tegn."),
    lastName: z.string().min(2, "Indtast mindst 2 tegn."),
    username: z
        .string()
        .min(3, "Brugernavn skal være mindst 3 tegn.")
        .regex(
            /^[a-zA-Z0-9._-]+$/,
            "Brug kun bogstaver, tal, punktum, _ eller -.",
        ),
    age: z
        .string()
        .trim()
        .min(1, "Indtast alder.")
        .refine((v) => /^\d+$/.test(v), "Alder skal være et tal.")
        .refine(
            (v) => Number(v) >= 12 && Number(v) <= 120,
            "Indtast en gyldig alder.",
        ),
    password: z.string().min(4, "Adgangskode skal være mindst 4 tegn."),
    confirmPassword: z.string().min(1, "Gentag adgangskoden."),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Adgangskoderne matcher ikke.",
    path: ["confirmPassword"],
});

export const loginSchema = z.object({
    Brugernavn: z.string().min(1, "Indtast en gyldig Brugernavn ."),
    password: z.string().min(4, "Password skal være mindst 4 karakterer.")
});

export const newsletterSchema = z.object({
    email: z.string().min(1, "Indtast en email-adresse.").regex(
        /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i,
        "Indtast en gyldig email-adresse."
    ),
});
export const ContactFormSchema = z.object({
    name: z.string().min(1, "Indtast dit navn."),
    email: z.string().min(1, "Indtast en email-adresse."),
    message: z.string().min(10, "Beskeden skal være mindst 10 tegn."),
});

export const createActivitySchema = z.object({
    name: z.string().min(1, "Indtast holdnavn."),
    description: z.string().min(1, "Indtast en beskrivelse."),
    weekday: z.string().min(1, "Vælg en ugedag."),
    time: z
        .string()
        .min(1, "Indtast et tidspunkt.")
        .regex(
            /^([01]\d|2[0-3]):[0-5]\d$/,
            "Tid skal være i formatet HH:MM.",
        ),
    minAge: z
        .string()
        .trim()
        .min(1, "Indtast min. alder.")
        .refine((v) => /^\d+$/.test(v), "Alder skal være et tal."),
    maxAge: z
        .string()
        .trim()
        .min(1, "Indtast max. alder.")
        .refine((v) => /^\d+$/.test(v), "Alder skal være et tal."),
    maxParticipants: z
        .string()
        .trim()
        .min(1, "Indtast antal deltagere.")
        .refine((v) => /^\d+$/.test(v), "Deltagere skal være et tal."),
}).refine(
    (data) => Number(data.minAge) <= Number(data.maxAge),
    {
        message: "Min. alder skal være mindre end eller lig max. alder.",
        path: ["maxAge"],
    },
);
