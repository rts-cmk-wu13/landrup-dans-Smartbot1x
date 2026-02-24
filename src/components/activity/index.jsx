"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import ActivityCard from "./ActivityCard";

export default function ActivitiesClient({ activities = [] }) {
  const [query, setQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleToggleSearch = () => {
    setIsSearchOpen((open) => !open);
    if (!isSearchOpen) {
      // when opening,
    }
  };

  const q = query.trim().toLowerCase();
  const filteredActivities =
    q.length === 0
      ? activities
      : activities.filter((activity) => {
          const name = activity.name?.toLowerCase() ?? "";
          const description = activity.description?.toLowerCase() ?? "";
          const weekday = activity.weekday?.toLowerCase() ?? "";

          return (
            name.includes(q) || description.includes(q) || weekday.includes(q)
          );
        });

  return (
    <section className="min-h-screen" aria-labelledby="activities-heading">
      <section className="container mx-auto px-4 py-6 flex items-center justify-between flex-row-reverse">
        <div className="">
          <button
            type="button"
            onClick={handleToggleSearch}
            className="p-2 rounded-full text-white hover:bg-white/10 transition-colors"
            aria-label={isSearchOpen ? "Luk søgning" : "Søg efter aktiviteter"}
          >
            <Search className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {isSearchOpen && (
          <div className="mt-4 bg-[#355b72] px-4 py-2 flex items-center rounded-[12px_12px_0_12px] w-80 h-12 ">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              className="ounded-lg px-4 py-2 text-white placeholder-white/70 outline-none text-sm"
              aria-label="Søg efter aktiviteter"
            />
          </div>
        )}
      </section>

      <section
        className="container mx-auto px-4 py-8"
        aria-label="Liste over aktiviteter"
      >
        <h1
          id="activities-heading"
          className="text-3xl font-bold mb-4 text-white"
        >
          Aktiviteter
        </h1>
        {filteredActivities.length === 0 ? (
          <p className="text-white/80 text-sm">
            Ingen aktiviteter matcher din søgning.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredActivities.map((activity) => (
              <Link href={`/aktiviteter/${activity.id}`} key={activity.id}>
                <ActivityCard activity={activity} />
              </Link>
            ))}
          </div>
        )}
      </section>
    </section>
  );
}
