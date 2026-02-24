import Image from "next/image";

export default function AuthLayout({ title, children }) {
  return (
    <>
      <section className="flex flex-col items-center mt-16">
        {title && <h1>{title}</h1>}
        <Image src="/img/logo.png" alt="logo" width={64} height={64} />
        <Image
          src="/img/logo-text.png"
          alt="Landrup Dans"
          width={290}
          height={62.17}
        />
      </section>
      <hr />
      {children}
    </>
  );
}

