"use client";

import { useActionState } from "react";
import { subscribeNewsletter } from "./newsletterAction";

export default function Newsletter() {
  const [state, formAction, isPending] = useActionState(
    subscribeNewsletter,
    {},
  );

  return (
    <section className="w-89 h-43.5 flex-center mb-10 mt-10">
      <h1>Nyhedsbrev</h1>
      <p className="text-secondary mt-2">
        Få direkte besked når vi har sæsonstart eller afholder arrangementer.
      </p>

      <form action={formAction} className="flex gap-3 mt-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="
          flex-1 px-4
           py-3 bg-white
            text-background 
            rounded-sm text-base 
            outline-none"
        />
        <button
          type="submit"
          disabled={isPending}
          className="flex justify-center items-center gap-2 w-20.75 px-[10px] py-4 rounded-[10px] bg-secondary text-background font-medium shadow-(--box-shadow) hover:bg-white disabled:opacity-50 cursor-pointer"
        >
          {isPending ? "Sender..." : "Tilmeld"}
        </button>
      </form>

      {state.message && (
        <p
          className={`mt-3 text-sm ${state.success ? "text-green-400" : "text-red-400"}`}
        >
          {state.message}
        </p>
      )}
    </section>
  );
}
