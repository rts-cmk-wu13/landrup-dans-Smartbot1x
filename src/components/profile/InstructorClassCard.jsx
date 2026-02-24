"use client";

import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";

export default function InstructorClassCard({
  title,
  time,
  maxParticipants,
  registeredCount,
  holdId,
  onEdit,
  onDelete,
}) {
  return (
    <article className="bg-card-bg rounded-lg p-4 shadow-(--box-shadow) flex flex-col gap-3">
      <h2 className="font-medium text-[26px] text-black">{title}</h2>

      <p className="text-black/80 text-[18px]">{time}</p>
      <div className="flex justify-between">
        <p className="text-black/80 text-[18px]">
          Max. deltagere: {maxParticipants}
        </p>
        <p className="text-black/80 text-[18px]">
          Tilmeldte: {registeredCount}
        </p>{" "}
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <Link
          href={holdId ? `/profile/hold/${holdId}` : "/profile/hold/1"}
          className="inline-flex items-center gap-1.5 rounded-lg bg-background text-secondary px-3 py-2 text-sm font-medium hover:bg-background/90"
        >
          Deltagerliste
        </Link>
        <button
          type="button"
          onClick={onEdit}
          aria-label="Rediger hold"
          className="p-2 rounded-lg bg-background text-secondary hover:bg-background/90"
        >
          <Pencil className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={onDelete}
          aria-label="Slet hold"
          className="p-2 rounded-lg bg-background text-secondary hover:bg-background/90"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
}
