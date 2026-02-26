"use server"
import { z } from "zod"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { loginSchema } from "@/lib/schemas"


export async function loginUser(prevState, formData) {

    const cookieStore = await cookies()
    const Brugernavn = formData.get("Brugernavn")
    const password = formData.get("password")


    if (Brugernavn === prevState.values.Brugernavn && password === prevState.values.password) {
        return prevState
    }

    const result = loginSchema.safeParse({ Brugernavn, password })

    if (!result.success) {
        console.log(z.flattenError(result.error).fieldErrors)
        return {
            values: { Brugernavn, password },
            errors: z.flattenError(result.error).fieldErrors
        }
    }

    const response = await fetch("http://localhost:4000/auth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: Brugernavn, password })
    })

    if (!response.ok) {
        return {
            values: { Brugernavn, password },
            errors: { form: ["Forkert Brugernavn eller adgangskode."] }
        }
    }

    //console.log(response)
    const data = await response.json()
    console.log(data)

    cookieStore.set("Landrup-accessToken", data.token, { maxAge: 60 * 60 * 24 * 7 })
    cookieStore.set("userId", data.userId)
    console.log(cookieStore.get("Landrup-accessToken"))

    /*  cookieStore.set("Landrup-accessToken"/* , data.token, { maxAge: 60 * 60 * 24 * 7 } )*/




    return redirect("/aktiviteter")

}