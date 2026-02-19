import { checkAccess } from "@/lib/secondline";
export const metadata = {
  title: "Brugerprofil",
  description: "Se din brugerprofil på Landrup Dans",
};

export default async function userProfile() {
  await checkAccess();
  return (
    <>
      <h1>Brugerprofil</h1>
    </>
  );
}
