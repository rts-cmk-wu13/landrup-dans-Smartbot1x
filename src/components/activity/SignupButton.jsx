"use server";

import { getCurrentUser, signUpForActivity } from "@/lib/dal";

export async function signUpForActivityAction(activityId) {
  const user = await getCurrentUser();

  if (!user) {
    return {
      success: false,
      message: "Du skal være logget ind for at tilmelde dig.",
    };
  }

  // Tillad både "default" og "member" som almindelige brugere
  const isMember = user.role === "default" || user.role === "member";

  if (!isMember) {
    return {
      success: false,
      message: "Kun medlemmer kan tilmelde sig som deltagere.",
    };
  }

  return await signUpForActivity(activityId, user.id);
}
