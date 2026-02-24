"use client";

import { LogIn } from "lucide-react";
import { signupUser } from "./action";
import { useActionState } from "react";

export default function CreateUserForm() {
  const [state, formAction] = useActionState(signupUser, {
    values: {},
    errors: {},
  });

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-10">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-secondary">
        Opret bruger
      </h1>

      <form
        action={formAction}
        className="mt-8 sm:mt-10 space-y-4 sm:space-y-5"
      >
        {/* First Name */}
        <div>
          <input
            name="firstName"
            defaultValue={state.values?.firstName}
            placeholder="Fornavn"
            autoComplete="given-name"
            className="w-full h-11.5 bg-secondary flex align-middle px-4 py-4 text-base sm:text-lg text-background placeholder:text-[#999] shadow-sm outline-none ring-1 ring-background focus:ring-2 focus:ring-background"
          />
          {state.errors?.firstName && (
            <p className="mt-2 text-sm text-rose-400">
              {state.errors.firstName[0]}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <input
            name="lastName"
            defaultValue={state.values?.lastName}
            placeholder="Efternavn"
            autoComplete="family-name"
            className="w-full h-11.5 bg-secondary flex align-middle px-4 py-4 text-base sm:text-lg text-background placeholder:text-[#999] shadow-sm outline-none ring-1 ring-background focus:ring-2 focus:ring-background"
          />
          {state.errors?.lastName && (
            <p className="mt-2 text-sm text-rose-400">
              {state.errors.lastName[0]}
            </p>
          )}
        </div>

        {/* Username */}
        <div>
          <input
            name="username"
            defaultValue={state.values?.username}
            placeholder="Brugernavn"
            autoComplete="username"
            className="w-full h-11.5 bg-secondary flex align-middle px-4 py-4 text-base sm:text-lg text-background placeholder:text-[#999] shadow-sm outline-none ring-1 ring-background focus:ring-2 focus:ring-background"
          />
          {state.errors?.username && (
            <p className="mt-2 text-sm text-rose-400">
              {state.errors.username[0]}
            </p>
          )}
        </div>

        {/* Age */}
        <div>
          <input
            name="age"
            defaultValue={state.values?.age}
            placeholder="Alder"
            type="text"
            inputMode="numeric"
            className="w-full h-11.5 bg-secondary flex align-middle px-4 py-4 text-base sm:text-lg text-background placeholder:text-[#999] shadow-sm outline-none ring-1 ring-background focus:ring-2 focus:ring-background"
          />
          {state.errors?.age && (
            <p className="mt-2 text-sm text-rose-400">{state.errors.age[0]}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            name="password"
            type="password"
            placeholder="Adgangskode"
            autoComplete="new-password"
            className="w-full h-11.5 bg-secondary flex align-middle px-4 py-4 text-base sm:text-lg text-background placeholder:text-[#999] shadow-sm outline-none ring-1 ring-background focus:ring-2 focus:ring-background"
          />
          {state.errors?.password && (
            <p className="mt-2 text-sm text-rose-400">
              {state.errors.password[0]}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Gentag adgangskode"
            autoComplete="new-password"
            className="w-full h-11.5 bg-secondary flex align-middle px-4 py-4 text-base sm:text-lg text-background placeholder:text-[#999] shadow-sm outline-none ring-1 ring-background focus:ring-2 focus:ring-background"
          />
          {state.errors?.confirmPassword && (
            <p className="mt-2 text-sm text-red-400">
              {state.errors.confirmPassword[0]}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="pt-3 sm:pt-4">
          <button
            type="submit"
            className="mx-auto flex w-[240px] max-w-xs items-center justify-center gap-3 rounded-[10px] bg-secondary px-6 py-4 shadow-(--box-shadow) "
          >
            <LogIn size={20} />
            <span className="text-background text-xl">Opret bruger</span>
          </button>

          {state.errors?.form && (
            <p className="mt-4 text-center text-sm font-medium text-red-400">
              {state.errors.form[0]}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
