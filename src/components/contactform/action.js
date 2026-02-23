"use server";

import { z } from "zod";
import { ContactFormSchema } from "@/lib/schemas";

export async function contactForm(prevState, formData) {
    const email = formData.get("email");
    const name = formData.get("name");
    const message = formData.get("message");

    const values = { email, name, message };

    // Only skip if values are identical and last result was success
    if (
        prevState &&
        prevState.values &&
        email === prevState.values.email &&
        name === prevState.values.name &&
        message === prevState.values.message &&
        prevState.success
    ) {
        return prevState;
    }

    const result = ContactFormSchema.safeParse(values);

    if (!result.success) {
        const fieldErrors = z.flattenError(result.error).fieldErrors;
        return {
            values,
            success: false,
            errors: fieldErrors,
            message:
                fieldErrors.email?.[0] ||
                fieldErrors.name?.[0] ||
                fieldErrors.message?.[0] ||
                "Ugyldig input.",
        };
    }

    try {
        const res = await fetch("http://localhost:4000/api/v1/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        });

        if (!res.ok) {
            throw new Error("Something went wrong");
        }

        return {
            values,
            success: true,
            errors: undefined,
            message: "Your message has been sent successfully!",
        };
    } catch (error) {
        return {
            values,
            success: false,
            errors: undefined,
            message: "something went wrong server, please try again later.",
        };
    }
}
