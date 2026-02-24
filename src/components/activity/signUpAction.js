"use client";

import { useState, useTransition } from "react";
import { signUpForActivityAction } from "./SignupButton";

export default function SignUpButton({ activityId }) {
  const [message, setMessage] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleSignUp = () => {
    setMessage(null);

    startTransition(async () => {
      const result = await signUpForActivityAction(activityId);

      if (!result || result.success === false) {
        setMessage({
          type: "error",
          text:
            result?.message ||
            "Noget gik galt. Prøv igen senere.",
        });
      } else {
        setMessage({
          type: "success",
          text: "Du er nu tilmeldt aktiviteten!",
        });
      }
    });
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={handleSignUp}
        disabled={isPending}
        className="bg-background w-60 ml-20  disabled:bg-secondary/30 text-white font-bold py-3 px-8 rounded-[10px] shadow-lg transition-colors duration-200"
      >
        {isPending ? "Tilmelder..." : "Tilmeld"}
      </button>
      {message && (
        <div
          className={`text-sm font-medium px-4 py-2 rounded ${message.type === "error"
            ? "bg-red-100 text-red-800"
            : "bg-green-100 text-green-800"
            }`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}


