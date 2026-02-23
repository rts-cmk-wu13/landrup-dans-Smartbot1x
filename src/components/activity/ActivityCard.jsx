export default function ActivityCard({ activity }) {
  const ageRange =
    activity.minAge === activity.maxAge
      ? `${activity.minAge} år`
      : activity.maxAge === 100
        ? `${activity.minAge}+ år`
        : `${activity.minAge}-${activity.maxAge} år`;

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <article className="relative h-64 overflow-hidden">
        <img
          src={activity.asset?.url || "/placeholder.jpg"}
          alt={activity.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        <div className="overlay_content absolute bottom-0 "></div>

        <article className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-bold mb-1">{activity.name}</h3>
          <p className="text-sm text-gray-200">{ageRange}</p>
        </article>
      </article>
      {/* 
      {activity.users && activity.users.length > 0 && (
        <section className="absolute top-3 right-3 bg-white/90 rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
          {activity.users.length}/{activity.maxParticipants}
        </section>
      )} */}
    </div>
  );
}
