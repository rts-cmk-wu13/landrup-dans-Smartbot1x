import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero__container ">
      <div className="hero__content ">
        <Image src="/img/logo.png" alt="logo" width={64} height={64} />
        <Image
          src="/img/logo-text.png"
          alt="Landrup Dans"
          width={290}
          height={62.17}
        />
        <hr />
      </div>

      <div className="hero__bottom">
        <Link href="/logind" className="hero__btn ">
          Log ind her
        </Link>
        <Image src="/img/arrow.png" alt="hero-bottom" width={48} height={48} />
      </div>
    </section>
  );
}
