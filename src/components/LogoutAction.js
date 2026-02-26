"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";




export default async function LogoutAction() {
    const cookieStore = await cookies();
    cookieStore.delete("Landrup-accessToken");
    cookieStore.delete("userId");
    return redirect("/");
}

export async function isUserLoggedIn() {
    const cookieStore = await cookies();
    return cookieStore.has("Landrup-accessToken");
}
