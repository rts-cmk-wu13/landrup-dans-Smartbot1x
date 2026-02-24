import { checkAccess } from "@/lib/secondline";
import { getActivityById, getCurrentUser } from "@/lib/dal";
import ProfileHeader from "@/components/profile/ProfileHeader";
import { notFound, redirect } from "next/navigation";
import { FaUser } from "react-icons/fa";

export const metadata = {
  title: "Deltagerliste",
  description: "Se deltagerlisten for dit hold",
};

export default async function DeltagerlistePage({ params }) {
  await checkAccess();

  const resolvedParams = await params;
  const holdId = resolvedParams.id;

  const [user, activity] = await Promise.all([
    getCurrentUser(),
    getActivityById(holdId),
  ]);

  if (!activity || activity?.success === false) {
    notFound();
  }

  const role = user?.role ?? "default";

  if (role !== "instructor" || activity.instructorId !== user?.id) {
    redirect("/profile");
  }

  const name = user?.name ?? "Instruktør";
  const participants = activity.users ?? [];
  const maxParticipants = activity.maxParticipants ?? 0;

  const ageRange =
    activity.minAge === activity.maxAge
      ? `${activity.minAge} år`
      : activity.maxAge === 100
        ? `${activity.minAge}+ år`
        : `${activity.minAge}-${activity.maxAge} år`;

  return (
    <>
      <ProfileHeader name={name} role={role} />

      <section
        className="bg-[#003047] text-white px-6 py-6 min-h-[50vh] space-y-3.5"
        aria-labelledby="hold-participants-heading"
      >
        <h2
          id="hold-participants-heading"
          className="text-[26px] font-semibold mt-1"
        >
          {activity.name}
        </h2>
        <p className="text-[19px] uppercase tracking-wide text-txt">
          Deltagerliste
        </p>

        <section aria-label="Liste over deltagere">
          {participants.length === 0 ? (
            <p className="text-white/80 text-sm">
              Der er endnu ingen tilmeldte til dette hold.
            </p>
          ) : (
            <ul className="space-y-2">
              {participants.map((participant) => {
                const fullName =
                  [participant.firstname, participant.lastname]
                    .filter(Boolean)
                    .join(" ") ||
                  participant.username ||
                  "Ukendt deltager";

                return (
                  <li
                    key={participant.id}
                    className="w-[354px] h-10.5 flex items-center rounded[10px] text-background justify-between p-2.5 bg-card-bg  shadow-(--box-shadow)"
                  >
                    <div className="flex items-center gap-2">
                      <FaUser
                        className="w-5 h-5 text-background"
                        aria-hidden="true"
                      />

                      <p className="text-sm">{fullName}</p>
                    </div>
                    {participant.age && <p>{participant.age} år</p>}
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </section>
    </>
  );
}
{
  /*   <section
          className="bg-white/10 rounded-lg p-4 mb-4"
          aria-label="Overblik over deltagere"
        >
          <p className="text-sm">
            Tilmeldte:{" "}
            <span className="font-semibold">{participants.length}</span> /{" "}
            <span className="font-semibold">{maxParticipants}</span>
          </p>
        </section> */
}
