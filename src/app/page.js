import Image from 'next/image';
import logo from '../assets/logo.png';
import logotxt from '../assets/logo-text.png';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <section className="hero__container">
        <div className="hero__content">
          <Image src={logo} alt="Logo" />
          <Image src={logotxt} alt="Logo Text" />
          <hr />
        </div>

      </section>
      <Link
        type='button'
        href="/logind"
        className="btn btn-primary disabled:"
      >
        Login
      </Link>
      <p className="text-center text-sm mt-4">
        hey test </p>

    </>
  );
}
