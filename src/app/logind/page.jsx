import Image from "next/image";
import LoginForm from "@/components/loginForm/LoginForm";
import Link from "next/link";

export const metadata = {
  title: "Log ind",
  description: "Log ind på din konto",
};

export default function loginpage() {
  return (
    <>
      <section className="flex flex-col items-center mt-16">
        <Image src="/img/logo.png" alt="logo" width={64} height={64} />
        <Image
          src="/img/logo-text.png"
          alt="Landrup Dans"
          width={290}
          height={62.17}
        />
      </section>
      <hr />

      <h1 className="text-left ml-6 mb-4">log ind</h1>
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
    </>
  );
}
