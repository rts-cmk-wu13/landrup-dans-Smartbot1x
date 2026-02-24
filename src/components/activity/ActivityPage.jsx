import { getActivities } from "@/lib/dal";
import ActivitiesClient from ".";

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

  const list = Array.isArray(activities) ? activities : [];

  return <ActivitiesClient activities={list} />;
}
