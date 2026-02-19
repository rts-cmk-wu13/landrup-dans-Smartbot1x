import { checkAccess } from "@/lib/secondline";

export default async function activityPage() {
  // checking access for the page incase proxy doesnt work
  await checkAccess();
  return (
    <>
      <h2>Aktiviteter</h2>
    </>
  );
}
