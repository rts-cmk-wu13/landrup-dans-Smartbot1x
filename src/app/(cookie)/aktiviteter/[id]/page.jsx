import { getActivityById, getCurrentUser } from "@/lib/dal";
import ActivityDetail from "@/components/activity/ActivityDetail";
import { notFound } from "next/navigation";

export default async function ActivityDetailPage({ params }) {
  // Await params for Next.js 15 compatibility
  const resolvedParams = await params;
  const activity = await getActivityById(resolvedParams.id);
  const currentUser = await getCurrentUser();

  if (!activity || activity?.success === false) {
    notFound();
  }

  const isInstructor =
    currentUser &&
    currentUser.role === "instructor" &&
    activity.instructorId === currentUser.id;

  return <ActivityDetail activity={activity} isInstructor={isInstructor} />;
}
