import CreateUserForm from "@/components/signupform/CreateUserForm";
import Image from "next/image";

export const metadata = {
  title: "Opret bruger",
  description: "Opret en ny bruger på Landrup Dans",
};
export default function register() {
  return (
    <>
      <section className="flex flex-col items-center mt-16">
        <h1>Opret bruger</h1>
        <Image src="/img/logo.png" alt="logo" width={64} height={64} />
        <Image
          src="/img/logo-text.png"
          alt="Landrup Dans"
          width={290}
          height={62.17}
        />
      </section>
      <hr />
      <CreateUserForm />
    </>
  );
}
