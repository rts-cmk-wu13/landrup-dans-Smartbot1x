"use client";

import Image from "next/image";

export default function CardComponents() {
  const holdtyper = [
    {
      title: "Børnehold ",
      img: "/img/boernedans.jpg",
      description:
        "På børneholdene leger vi os ind i dansens verden gennem musik, bevægelse og fantasi. Undervisningen styrker motorik, rytme og kropsbevidsthed i trygge rammer. Fokus er på danseglæde, fællesskab og aktiv bevægelse, hvor alle kan være med.",
    },
    {
      title: "Selskabs- og seniordans ",
      img: "/img/seniordans.jpg",
      description:
        "Selskabs- og seniordans kombinerer hyggeligt samvær med skånsom motion. Vi danser klassiske pardanse i et tempo, hvor alle kan følge med. Undervisningen styrker balance, koordination og kondition, samtidig med at fællesskabet og danseglæden er i centrum.",
    },
    {
      title: "Moderne dans og ballet ",
      img: "/img/modernedans.JPG",
      description:
        "Moderne dans og ballet forener teknik, kropskontrol og musikalsk udtryk. Træningen forbedrer styrke, smidighed og holdning gennem varierede øvelser. Undervisningen foregår i en positiv atmosfære, hvor bevægelsesglæde og koncentration skaber både fordybelse og effektiv motion.",
    },
    {
      title: "Streetdance og hiphop ",
      img: "/img/streethiphop.jpg",
      description:
        "Streetdance og hiphop er energifyldt træning med fokus på rytme, attitude og fællesskab. Vi arbejder med grooves, koreografier og grundtrin, der styrker kondition og koordination. Stemningen er uformel og motiverende, så motion og danseglæde går hånd i hånd.",
    },
  ];
  return (
    <>
      <h1>Vores holdtyper</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 text-secondary">
        {holdtyper.map((hold) => (
          <article key={hold.title} className="space-y-5 text-center">
            <h2 className="text-left">{hold.title}</h2>
            <Image
              src={hold.img}
              alt={hold.title}
              className="card-img"
              width={356}
              height={216}
            />

            <p className="h-33 w-89 text-center">{hold.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
