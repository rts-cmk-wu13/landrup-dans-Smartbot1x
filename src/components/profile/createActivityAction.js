"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { createActivityWithFormData } from "@/lib/dal";
import { createActivitySchema } from "@/lib/schemas";

export async function createActivityAction(prevState, formData) {
  const values = {
    name: formData.get("name") ?? "",
    description: formData.get("description") ?? "",
    weekday: formData.get("weekday") ?? "",
    time: formData.get("time") ?? "",
    minAge: formData.get("minAge") ?? "",
    maxAge: formData.get("maxAge") ?? "",
    maxParticipants: formData.get("maxParticipants") ?? "",
  };

  const result = createActivitySchema.safeParse(values);

  if (!result.success) {
    return {
      values,
      errors: z.flattenError(result.error).fieldErrors,
    };
  }

  const apiResult = await createActivityWithFormData(formData);
  if (apiResult.success) {
    redirect("/profile");
  }

  return {
    values,
    errors: { form: [apiResult.error || "Kunne ikke oprette hold."] },
  };
}
