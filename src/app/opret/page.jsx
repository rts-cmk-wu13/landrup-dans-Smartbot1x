import CreateUserForm from "@/components/signupform/CreateUserForm";
import AuthLayout from "@/components/auth/AuthLayout";

export const metadata = {
  title: "Opret bruger",
  description: "Opret en ny bruger på Landrup Dans",
};
export default function register() {
  return (
    <AuthLayout title="Opret bruger">
      <CreateUserForm />
    </AuthLayout>
  );
}
