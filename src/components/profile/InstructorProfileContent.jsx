"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import InstructorClassCard from "./InstructorClassCard";

export default function InstructorProfileContent({
  myClasses = [],
  onEdit,
  onDelete,
}) {
  return (
    <section className="bg-background text-secondary px-6 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Mine hold</h2>
        <Link
          href="/profile/hold/opret"
          className="flex items-center justify-center w-10 h-10 rounded-[10px] shadow-(--box-shadow) bg-white text-background hover:bg-secondary/90"
          aria-label="Opret nyt hold"
        >
          <Plus className="w-5 h-5" />
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {myClasses.length === 0 ? (
          <p className="text-secondary/80 text-sm">
            Du har ikke oprettet nogen hold endnu.
          </p>
        ) : (
          myClasses.map((hold) => (
            <InstructorClassCard
              key={hold.id}
              title={hold.title}
              time={hold.time}
              maxParticipants={hold.maxParticipants}
              registeredCount={hold.registeredCount}
              holdId={hold.id}
              onEdit={() => onEdit?.(hold)}
              onDelete={() => onDelete?.(hold)}
            />
          ))
        )}
      </div>
    </section>
  );
}
