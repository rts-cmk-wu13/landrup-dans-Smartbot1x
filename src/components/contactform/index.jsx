"use client";
import { useActionState } from "react";
import { contactForm } from "./action";

const initialState = {
  success: false,
  message: "",
};

export default function ContactLanding() {
  const [state, formAction, isPending] = useActionState(
    contactForm,
    initialState,
  );
  return (
    <form
      onSubmit={(e) => {
        if (isPending) e.preventDefault();
      }}
      action={formAction}
      className="flex flex-col gap-4 max-w-md mx-auto  p-6 rounded-lg shadow"
    >
      <h2 className="text-xl font-semibold mb-2">Kontakt os</h2>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Navn"
          defaultValue={state.success ? "" : state.values?.name || ""}
          className="w-full h-11.5 bg-secondary flex align-middle px-4 py-4 text-base sm:text-lg text-background placeholder:text-[#999] shadow-sm outline-none ring-1 ring-background focus:ring-2 focus:ring-background"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          defaultValue={state.success ? "" : state.values?.email || ""}
          className="w-full h-11.5 bg-secondary flex align-middle px-4 py-4 text-base sm:text-lg text-background placeholder:text-[#999] shadow-sm outline-none ring-1 ring-background focus:ring-2 focus:ring-background"
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Besked"
          rows={4}
          defaultValue={state.success ? "" : state.values?.message || ""}
          className="w-full  bg-secondary flex align-middle px-4 py-4 text-base sm:text-lg text-background placeholder:text-[#999] shadow-sm outline-none ring-1 ring-background focus:ring-2 focus:ring-background"
        />
      </div>
      {state.message && (
        <p
          className={`text-sm ${state.success ? "text-green-600" : "text-red-400"}`}
        >
          {state.message}
        </p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="mx-auto flex w-[240px] max-w-xs items-center justify-center gap-3 rounded-[10px] bg-secondary px-6 py-4 shadow-(--box-shadow) "
      >
        {isPending ? "Sender..." : "Send besked"}
      </button>
    </form>
  );
}
