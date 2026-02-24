import Link from "next/link";

import { notFound } from "next/navigation";
import SignUpButton from "./signUpAction";
import { ArrowLeft } from "lucide-react";

export default function ActivityDetail({ activity, isInstructor = false }) {
  if (!activity) notFound();

  const ageRange =
    activity.minAge === activity.maxAge
      ? `${activity.minAge} år`
      : activity.maxAge === 100
        ? `${activity.minAge}+ år`
        : `${activity.minAge}-${activity.maxAge} år`;

  const participants = activity.users ?? [];
  const maxParticipants = activity.maxParticipants ?? 0;

  return (
    <section
      className="min-h-screen text-secondary "
      aria-labelledby="activity-detail-heading"
    >
      <section className="bg-background text-secondary">
        <div className="container mx-auto bg-background  px-4 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/aktiviteter"
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Tilbage til aktiviteter"
            >
              <ArrowLeft className="w-5 h-5" aria-hidden="true" />
            </Link>
            <h1 id="activity-detail-heading" className="text-2xl font-bold">
              Aktivitetsdetaljer
            </h1>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-2xl">
        <figure className="relative mt-6 rounded-lg overflow-hidden shadow-lg">
          <img
            src={activity.asset?.url || "/placeholder.jpg"}
            alt={activity.name}
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          <figcaption className="sr-only">
            Billede af aktiviteten {activity.name}
          </figcaption>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <SignUpButton activityId={activity.id} />
          </div>
        </figure>

        <article className="  p-6 mt-6">
          <h2 className="text-2xl font-bold mb-1">{activity.name}</h2>
          <p className=" font-medium mb-4">{ageRange}</p>

          <p className=" leading-relaxed mb-6">{activity.description}</p>
        </article>
        {/*     extra info om deltagere og max deltagere */}
        <section
          className=" text-background bg-secondary p-6 mt-4"
          aria-label="Status for deltagere"
        >
          <h3 className="font-bold mb-3">Deltagere</h3>
          <div className="flex items-center justify-between">
            <p className="">Tilmeldte: {participants.length}</p>
            <p className="">Max: {maxParticipants}</p>
          </div>
          <div
            className="mt-2 w-full bg-gray-200 rounded-full h-2"
            aria-hidden="true"
          >
            <div
              className="bg-secondary h-2 rounded-full transition-all"
              style={{
                width:
                  maxParticipants > 0
                    ? `${(participants.length / maxParticipants) * 100}%`
                    : "0%",
              }}
            />
          </div>
        </section>

        {isInstructor && participants.length > 0 && (
          <section
            className="bg-[#003047] text-white rounded-lg shadow-md mt-4 mb-8"
            aria-label="Deltagerliste for instruktør"
          >
            <div className="px-6 py-4 border-b border-white/10">
              <p className="text-sm uppercase tracking-wide text-white/70">
                Min profil
              </p>
              <p className="text-lg font-semibold mt-1">{activity.name}</p>
            </div>

            <div className="px-6 py-4">
              <h4 className="font-semibold mb-3">Deltagerliste</h4>
              <ul className="space-y-2">
                {participants.map((user) => {
                  const fullName =
                    [user.firstname, user.lastname].filter(Boolean).join(" ") ||
                    user.username ||
                    "Ukendt deltager";

                  return (
                    <li
                      key={user.id}
                      className="flex items-center justify-between bg-white/10 rounded-lg px-3 py-2"
                    >
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-900/20">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5.121 17.804A9 9 0 1118.88 6.196 9 9 0 015.12 17.804z"
                            />
                          </svg>
                        </span>
                        <span className="text-sm">{fullName}</span>
                      </div>
                      {user.age && (
                        <span className="text-xs text-white/80">
                          {user.age} år
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        )}
      </section>
    </section>
  );
}
