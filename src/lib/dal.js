"use server";
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
 * Create new activity
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
        const res = await fetch(`${API_BASE_URL}/activities/${activityId}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId }),
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



