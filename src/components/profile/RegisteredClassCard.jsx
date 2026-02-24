import Link from "next/link";

export default function RegisteredClassCard({ title, name, time, holdId }) {
  const displayTitle = title || name || "Ukendt hold";

  return (
    <article className="bg-secondary text-background rounded-lg p-4 shadow-(--box-shadow) flex flex-col gap-3">
      <h2 className="font-medium text-lg text-background">{displayTitle}</h2>
      <p className="text-background/80 text-sm">{time}</p>
      <Link
        href={holdId ? `/aktiviteter/${holdId}` : "/aktiviteter"}
        className="inline-flex justify-center rounded-lg bg-background text-secondary px-4 py-2 text-sm font-medium hover:bg-background/90"
      >
        Vis hold
      </Link>
    </article>
  );
}

