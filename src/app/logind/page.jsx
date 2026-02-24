import LoginForm from "@/components/loginForm/LoginForm";
import Link from "next/link";
import AuthLayout from "@/components/auth/AuthLayout";

/* import { Suspense } from "react"; */

export const metadata = {
  title: "Log ind",
  description: "Log ind på din konto",
};

export default function loginpage() {
  return (
    <AuthLayout title="Log ind">
      <h1 className="text-left ml-6 mb-4 text-secondary">Log ind</h1>
      <div className="form__wrapper flex flex-col items-center space-y-2 ">
        <LoginForm />
      </div>
      <article>
        <p className="text-center w-88.5 h-6.25 mt-8 text-secondary">
          Er du endnu ikke bruger?{" "}
          <span>
            <Link href="/opret" className="underline">
              {" "}
              Opret dig her.
            </Link>
          </span>
        </p>
      </article>
    </AuthLayout>
  );
}
