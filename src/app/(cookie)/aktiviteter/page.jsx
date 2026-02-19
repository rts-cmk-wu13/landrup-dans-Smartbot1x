import { checkAccess } from "@/lib/secondline";

export default async function activityPage() {
  await checkAccess();
  return (
    <>
      <h2>Aktiviteter</h2>
    </>
  );
}
