import Link from "next/link";

export default function unauthorized() {
  return (
    <>
      <section className="flex items-center p-16 bg-secondary h-screen">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
              <span className="sr-only">Error</span>401
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              this page is not for you. you dont have access to this page
            </p>
            <p className="mt-4 mb-8 dark:text-gray-600">
              But dont worry, u can go back look homepage or try to log in if
              you have an account or create one
            </p>
            <div className="flex space-x-3.5">
              <Link
                href="/"
                className="px-2 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
              >
                Back to homepage
              </Link>
              <Link
                href="/logind"
                className="px-2 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
              >
                try to log in
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
