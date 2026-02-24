import { checkAccess } from "@/lib/secondline";
import { getCurrentUser, getActivities } from "@/lib/dal";
import {
  ProfileHeader,
  UserProfileContent,
  InstructorProfileContent,
} from "@/components/profile";

export const metadata = {
  title: "Min profil",
  description: "Se din brugerprofil på Landrup Dans",
};

function formatActivityTime(activity) {
  if (activity.weekday && activity.time)
    return `${activity.weekday} kl. ${activity.time}`;
  if (activity.time) return activity.time;
  return "";
}

export default async function ProfilePage() {
  await checkAccess();
  const user = await getCurrentUser();
  const name = user?.name ?? "Bruger";
  const role = user?.role ?? "member";
  const userId = user?.id;

  const allActivities = await getActivities();
  const activitiesList = Array.isArray(allActivities) ? allActivities : [];

  const registeredClasses =
    role === "member" && userId != null
      ? activitiesList
          .filter((a) => a.users?.some((u) => u.id === userId))
          .map((a) => ({
            id: a.id,
            title: a.name ?? a.title ?? "Ukendt hold",
            time: formatActivityTime(a),
          }))
      : [];

  const myClasses =
    role === "instructor" && userId != null
      ? activitiesList
          .filter((a) => a.instructorId === userId)
          .map((a) => ({
            id: a.id,
            title: a.name,
            time: formatActivityTime(a),
            maxParticipants: a.maxParticipants ?? 0,
            registeredCount: a.users?.length ?? 0,
          }))
      : [];

  return (
    <>
      <ProfileHeader name={name} role={role} />
      {role === "instructor" ? (
        <InstructorProfileContent myClasses={myClasses} />
      ) : (
        <UserProfileContent registeredClasses={registeredClasses} />
      )}
    </>
  );
}
