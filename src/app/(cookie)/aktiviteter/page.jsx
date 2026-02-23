import ActivitiesPage from "@/components/activity/ActivityPage";
import { checkAccess } from "@/lib/secondline";
export const metadata = {
  title: "activities",
  description: "Se  aktiviteter på Landrup Dans",
};

export default async function userProfile() {
  // checking access for the page incase proxy doesnt work
  await checkAccess();
  return (
    <>
      <ActivitiesPage />
    </>
  );
}
