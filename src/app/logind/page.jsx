import Image from "next/image";
import logo from "../../assets/logo.png";
import logotxt from "../../assets/logo-text.png";
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
        <Image src={logo} alt="Logo" className="" />
        <Image src={logotxt} alt="Logo Text" className="w-64 h-16 mb-4" />
      </section>
      <hr />

      <h1 className="text-left ml-6">log ind</h1>
      <div className="form__wrapper flex flex-col items-center gap-5 mt-2.5">
        <LoginForm />
      </div>
      <article>
        <p className="text-center w-88.5 h-6.25 mt-3.5 text-secondary">
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
