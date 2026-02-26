"use server";

import { cookies } from "next/headers";

const API_BASE_URL = "http://localhost:4000/api/v1";

/**
 * Get testimonials
 */
export async function getTestimonials() {
    try {
        const res = await fetch(`${API_BASE_URL}/testimonials`);
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



/**
 * Get all activities
 */
export async function getActivities() {
    try {
        const res = await fetch(`${API_BASE_URL}/activities`);

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
        console.log("getActivities error:", error);
        return {
            success: false,
            message: "something went wrong on the server, try again later",
        };
    }
}

/**
 * Get single activity by ID
 */
export async function getActivityById(id) {
    try {
        const res = await fetch(`${API_BASE_URL}/activities/${id}`);

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
        console.log("getActivityById error:", error);
        return {
            success: false,
            message: "something went wrong on the server, try again later",
        };
    }
}

/**
 * Create new activity (JSON). Use createActivityWithFormData for multipart (file upload).
 */
export async function createActivity(activityData) {
    try {
        const res = await fetch(`${API_BASE_URL}/activities`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(activityData),
        });

        if (!res.ok) {
            throw new Error("Something went wrong");
        }

        if (res.status !== 200 && res.status !== 201) {
            throw new Error(res.statusText || "Bad status");
        }

        const contentType = res.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
            return await res.json();
        }

        throw new Error("Not JSON");
    } catch (error) {
        console.log("createActivity error:", error);
        return {
            success: false,
            message: "something went wrong on the server, try again later",
        };
    }
}

/**
 * Create activity via multipart/form-data (Landrup API: name, description, weekday, time, maxParticipants, minAge, maxAge, file).

 */
export async function createActivityWithFormData(formData) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("Landrup-accessToken")?.value;
        if (!token) {
            return { success: false, error: "Ikke logget ind." };
        }

        const res = await fetch(`${API_BASE_URL}/activities`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });

        if (!res.ok) {
            const text = await res.text();
            return {
                success: false,
                error: text || res.statusText || "Kunne ikke oprette hold",
            };
        }

        const contentType = res.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
            const data = await res.json();
            return { success: true, data };
        }
        return { success: true, data: null };
    } catch (error) {
        console.log("createActivityWithFormData error:", error);
        return {
            success: false,
            error: "Noget gik galt. Prøv igen senere.",
        };
    }
}

/**
 * Update activity
 */
export async function updateActivity(id, activityData) {
    try {
        const res = await fetch(`${API_BASE_URL}/activities/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(activityData),
        });

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
        console.log("updateActivity error:", error);
        return {
            success: false,
            message: "something went wrong on the server, try again later",
        };
    }
}

/**
 * Delete activity
 */
export async function deleteActivity(id) {
    try {
        const res = await fetch(`${API_BASE_URL}/activities/${id}`, {
            method: "DELETE",
        });

        if (!res.ok) {
            throw new Error("Something went wrong");
        }

        if (res.status !== 200 && res.status !== 204) {
            throw new Error(res.statusText || "Bad status");
        }

        return {
            success: true,
            message: "Activity deleted successfully",
        };
    } catch (error) {
        console.log("deleteActivity error:", error);
        return {
            success: false,
            message: "something went wrong on the server, try again later",
        };
    }
}

/**
 * Sign up for activity 
 */
export async function signUpForActivity(activityId, userId) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("Landrup-accessToken")?.value;

        if (!token) {
            return {
                success: false,
                message: "Du skal være logget ind for at tilmelde dig.",
            };
        }

        const res = await fetch(`${API_BASE_URL}/users/${userId}/activities/${activityId}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!res.ok) {
            throw new Error("Something went wrong");
        }

        if (res.status !== 200 && res.status !== 201) {
            throw new Error(res.statusText || "Bad status");
        }

        const contentType = res.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
            return await res.json();
        }

        return {
            success: true,
            message: "Successfully signed up for activity",
        };
    } catch (error) {
        console.log("signUpForActivity error:", error);
        return {
            success: false,
            message: "something went wrong on the server, try again later",
        };
    }
}


function decodeJwtPayload(token) {
    try {
        const [, payloadBase64] = token.split(".");
        if (!payloadBase64) return null;
        const payloadJson = Buffer.from(payloadBase64, "base64").toString("utf8");
        return JSON.parse(payloadJson);


    } catch (error) {
        console.log("decodeJwtPayload error:", error);
        return null;
    }
}

/**
  Get current user from API (GET /users/:id). Returns null if not logged in or API fails.
  
 */
export async function getCurrentUser() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("Landrup-accessToken")?.value;
        if (!token) return null;

        const payload = decodeJwtPayload(token);
        const userId = payload?.data?.id;
        if (userId == null) return null;

        const res = await fetch(`${API_BASE_URL}/users/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
            cache: "no-store",
        });
        if (!res.ok) return null;

        const data = await res.json();
        const fullName = [data.firstname, data.lastname]
            .filter(Boolean)
            .join(" ") || data.username || "Bruger";

        const role =
            data.role === "instructor"
                ? "instructor"
                : "member";

        return {
            id: data.id,
            name: fullName,
            role,
        };
    } catch (error) {
        console.log("getCurrentUser error:", error);
        return null;
    }
}
