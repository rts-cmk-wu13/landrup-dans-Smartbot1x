"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { signupSchema } from "@/lib/schemas";
import { z } from "zod";

export async function signupUser(prevState, formData) {
    const cookieStore = await cookies();

    const values = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        username: formData.get("username"),
        age: formData.get("age"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
    };

    const result = signupSchema.safeParse(values);

    if (!result.success) {
        return {
            values,
            errors: z.flattenError(result.error).fieldErrors,
        };
    }

    const response = await fetch("http://localhost:4000/api/v1/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            firstName: values.firstName,
            lastName: values.lastName,
            username: values.username,
            age: Number(values.age),
            password: values.password,
        }),
    });

    if (!response.ok) {
        return {
            values,
            errors: { form: ["Kunne ikke oprette bruger. Prøv igen."] },
        };
    }

    const data = await response.json();

    cookieStore.set("Landrup-accessToken", data.token);
    cookieStore.set("userID", data.userId);

    // Redirect to login page after signup
    redirect("/logind");
}