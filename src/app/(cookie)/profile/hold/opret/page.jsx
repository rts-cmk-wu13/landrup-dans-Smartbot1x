import { redirect } from "next/navigation";
import { checkAccess } from "@/lib/secondline";
import { getCurrentUser } from "@/lib/dal";
import CreateClassForm from "@/components/profile/CreateClassForm";

export const metadata = {
  title: "Opret hold",
  description: "Opret et nyt hold som instruktør",
};

export default async function OpretHoldPage() {
  await checkAccess();
  const user = await getCurrentUser();
  if (user?.role !== "instructor") {
    redirect("/profile");
  }

  return (
    <section className="bg-background text-secondary px-6 py-8">
      <h1 className="text-2xl font-medium mb-6">Opret hold</h1>
      <CreateClassForm />
    </section>
  );
}
