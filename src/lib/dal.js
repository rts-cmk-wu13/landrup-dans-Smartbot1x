"use server";

export async function getTestimonials() {
    try {
        const res = await fetch("http://localhost:4000/api/v1/testimonials");
        if (!res.ok) {
            throw new Error("Something went wrong");
        }

        if (res.status !== 200) {
            throw new Error(res.statusText || "Bad status");
        }

        const contentType = res.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
            return await res.json();
        }

        throw new Error("Not JSON");
    } catch (error) {
        console.log("getTestimonials error:", error);
        return {
            success: false,
            message: "something went wrong on the server, try again later",
        };
    }
}
