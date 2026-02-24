"use client";
import "./_form.css";
import { useActionState } from "react";
import { loginUser } from "./action";
import { LoginButton } from "../ui/button";

const initialState = {
  values: {
    Brugernavn: "",
    password: "",
  },
  errors: undefined,
};

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(
    loginUser,
    initialState,
  );
  console.log(state);
  return (
    <form
      action={formAction}
      noValidate
      className="flex flex-col space-y-5 items-center"
    >
      <div>
        <input
          type="text"
          name="Brugernavn"
          placeholder="Brugernavn"
          defaultValue={state.values.Brugernavn}
        />
        {state.errors?.Brugernavn && <p>{state.errors.Brugernavn}</p>}
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Adgangskode"
          defaultValue={state.values.password}
        />
        {state.errors?.password && <p>{state.errors.password}</p>}
      </div>
      {state.errors?.form && <p>{state.errors.form}</p>}
      <LoginButton disabled={isPending} type="submit">
        {isPending ? "Logger ind..." : "Log ind"}
      </LoginButton>
    </form>
  );
}
