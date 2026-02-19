"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function checkAccess() {
    const cookieStore = await cookies();
    if (!cookieStore.has("accessToken")) return redirect("/unauthorized");
}
