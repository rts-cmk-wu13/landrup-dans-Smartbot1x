"use client";

import { useActionState } from "react";
import { createActivityAction } from "./createActivityAction";

const WEEKDAYS = [
  { value: "mandag", label: "Mandag" },
  { value: "tirsdag", label: "Tirsdag" },
  { value: "onsdag", label: "Onsdag" },
  { value: "torsdag", label: "Torsdag" },
  { value: "fredag", label: "Fredag" },
  { value: "lørdag", label: "Lørdag" },
  { value: "søndag", label: "Søndag" },
];

const inputClass =
  "w-full bg-secondary text-background px-4 py-3 rounded border-2 border-background outline-none placeholder:text-background/60";

export default function CreateClassForm() {
  const [state, formAction, isPending] = useActionState(createActivityAction, {
    values: {},
    errors: {},
  });

  return (
    <form action={formAction} className="flex flex-col gap-4 max-w-[360px]">
      <div>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Holdnavn"
          defaultValue={state.values?.name}
          className={inputClass}
        />
        {state.errors?.name && (
          <p className="mt-1 text-sm text-rose-400">{state.errors.name[0]}</p>
        )}
      </div>

      <div>
        <textarea
          id="description"
          name="description"
          rows={3}
          placeholder="Beskrivelse"
          defaultValue={state.values?.description}
          className={inputClass}
        />
        {state.errors?.description && (
          <p className="mt-1 text-sm text-rose-400">
            {state.errors.description[0]}
          </p>
        )}
      </div>

      <div>
        <select
          id="weekday"
          name="weekday"
          className={inputClass}
          defaultValue={state.values?.weekday || ""}
        >
          <option value="">Vælg ugedag</option>
          {WEEKDAYS.map((d) => (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>
        {state.errors?.weekday && (
          <p className="mt-1 text-sm text-rose-400">
            {state.errors.weekday[0]}
          </p>
        )}
      </div>

      <div>
        <input
          id="time"
          name="time"
          type="text"
          placeholder="Tidspunkt"
          defaultValue={state.values?.time}
          className={inputClass}
        />
        {state.errors?.time && (
          <p className="mt-1 text-sm text-rose-400">{state.errors.time[0]}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            id="minAge"
            name="minAge"
            type="number"
            min={0}
            max={100}
            placeholder="alder(min.)"
            defaultValue={state.values?.minAge}
            className={inputClass}
          />
          {state.errors?.minAge && (
            <p className="mt-1 text-sm text-rose-400">
              {state.errors.minAge[0]}
            </p>
          )}
        </div>
        <div>
          <input
            id="maxAge"
            name="maxAge"
            type="number"
            min={0}
            max={100}
            placeholder=" Alder (max.)"
            defaultValue={state.values?.maxAge}
            className={inputClass}
          />
          {state.errors?.maxAge && (
            <p className="mt-1 text-sm text-rose-400">
              {state.errors.maxAge[0]}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <select
            id="instructor"
            name="instructor"
            className={inputClass}
            defaultValue={state.values?.instructor || ""}
          >
            <option value="">Vælg instruktør</option>
            <option value="self">medlem</option>
          </select>
        </div>

        <div>
          <input
            id="maxParticipants"
            name="maxParticipants"
            type="number"
            min={1}
            placeholder="  Deltagere (max.)"
            defaultValue={state.values?.maxParticipants}
            className={inputClass}
          />
          {state.errors?.maxParticipants && (
            <p className="mt-1 text-sm text-rose-400">
              {state.errors.maxParticipants[0]}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-secondary text-sm mb-1">Billede</label>
        <div className="flex items-center gap-2">
          <input
            id="file"
            name="file"
            type="file"
            accept="image/*"
            className="hidden"
          />
          <label
            htmlFor="file"
            className="px-4 py-3 bg-secondary text-background rounded border-2 border-background cursor-pointer hover:bg-secondary/90"
          >
            Gennemse...
          </label>
          <span className="text-secondary/80 text-sm">Ingen fil valgt</span>
        </div>
      </div>

      {state.errors?.form && (
        <p className="text-red-400 text-sm">{state.errors.form[0]}</p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="w-full px-6 py-3 bg-secondary text-background font-medium rounded-lg shadow-(--box-shadow) hover:bg-secondary/90 disabled:opacity-60"
        >
          {isPending ? "Opretter..." : "Opret hold"}
        </button>
      </div>
    </form>
  );
}
