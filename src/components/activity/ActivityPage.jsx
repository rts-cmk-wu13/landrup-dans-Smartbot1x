import { getActivities } from "@/lib/dal";
import Link from "next/link";
import ActivityCard from "./ActivityCard";

export default async function ActivitiesPage() {
  const activities = await getActivities();

  if (activities?.success === false) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center" role="alert">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Fejl</h2>
          <p className="text-gray-600">{activities.message}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen" aria-labelledby="activities-heading">
      <section className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <h1 id="activities-heading" className="text-3xl font-bold">
            Aktiviteter
          </h1>
          <button
            type="button"
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Søg efter aktiviteter"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </section>

      <section
        className="container mx-auto px-4 py-8"
        aria-label="Liste over aktiviteter"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <Link href={`/aktiviteter/${activity.id}`} key={activity.id}>
              <ActivityCard activity={activity} />
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}
