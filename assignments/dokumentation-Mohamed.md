# Mohameds Landrup Dans opgave

Mohamed Osman Wu-13

## Tech stack

- **Next.js**  
  **<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" height="32" alt="Next.js logo" />**  
  Jeg bygger hele applikationen i Next.js, som er et komponent-baseret React‑framework med fil-baseret routing og mulighed for både server‑ og client‑komponenter. Det passer godt til Landrup‑opgaven, fordi frameworket allerede har taget mange strukturelle valg for mig (fx mapningen mellem mapper i `app/` og sider).

- **React**  
   **<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="32" alt="React logo" />**  
   **React**  
  React er grundlaget for Next.js og bruges til alle UI-komponenter, fx kort, lister og formularer. Komponentbaseret design gør det nemt at genbruge små byggesten på tværs af sider, så koden bliver overskuelig og let at vedligeholde.

- **Landrup Dans API**  
  Applikationen taler med det givne Landrup Dans REST‑API (`http://localhost:4000/api/v1`). Jeg bruger det til at hente aktiviteter, brugere, tilmeldinger og til at oprette nye hold og beskeder.

- **Tailwind CSS**  
   **<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" height="32" alt="Tailwind CSS logo" />**  
   **Tailwind CSS**  
  Jeg bruger Tailwind for hurtigt at bygge layouts med konsistente spacing- og farveskalaer. Jeg kombinerer det med lidt vanilje-CSS, når jeg har brug for finjusteringer eller speciel styling.

### Icons

- **Lucide React** UI-ikoner (lette og moderne SVG’er)
- **react-icon** teknologistack-ikoner i dokumentation
  **Hvorfor disse?**  
  Begge biblioteker giver adgang til SVG-ikoner, som nemt kan styles og tilpasses, så de matcher Figma-designet (størrelse, farve, stroke m.m.).  
  Det gør det muligt at holde et konsistent visuelt udtryk i hele applikationen.

## Kodeeksempler

### Kodeeksempel 1 – Server action til kontaktformular

[Gå til koden i projektet](../src/components/contactform/action.js)

```javascript
"use server";

import { z } from "zod";
import { ContactFormSchema } from "@/lib/schemas";

export async function contactForm(prevState, formData) {
  const email = formData.get("email");
  const name = formData.get("name");
  const message = formData.get("message");

  const values = { email, name, message };

  // Only skip if values are identical and last result was success
  if (
    prevState &&
    prevState.values &&
    email === prevState.values.email &&
    name === prevState.values.name &&
    message === prevState.values.message &&
    prevState.success
  ) {
    return prevState;
  }

  const result = ContactFormSchema.safeParse(values);

  if (!result.success) {
    const fieldErrors = z.flattenError(result.error).fieldErrors;
    return {
      values,
      success: false,
      errors: fieldErrors,
      message:
        fieldErrors.email?.[0] ||
        fieldErrors.name?.[0] ||
        fieldErrors.message?.[0] ||
        "Ugyldig input.",
    };
  }

  try {
    const res = await fetch("http://localhost:4000/api/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    return {
      values,
      success: true,
      errors: undefined,
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    return {
      values,
      success: false,
      errors: undefined,
      message: "something went wrong server, please try again later.",
    };
  }
}
```

**Hvad gør den?**  
Håndterer kontaktformularen: validerer input og sender beskeden til API’et.

**forklaret:**

1. Læser `email`, `name` og `message` fra `formData`
2. Undgår dobbelt-submit hvis samme data allerede er sendt succesfuldt
3. Validerer input med `ContactFormSchema`
4. Hvis fejl returnerer felt-specifikke fejl og besked
5. Hvis valid sender POST-request til `/messages`
6. Returnerer success eller server-fejl til formularen

**Vigtigt:**  
Fejl returneres struktureret pr. felt, så de kan vises direkte under de relevante inputs. Det giver en bedre brugeroplevelse.

### Kodeeksempel 2 – Server action til at oprette et hold

[Gå til koden i projektet](../src/components/profile/createActivityAction.js)

```javascript
"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { createActivityWithFormData } from "@/lib/dal";
import { createActivitySchema } from "@/lib/schemas";

export async function createActivityAction(prevState, formData) {
  const values = {
    name: formData.get("name") ?? "",
    description: formData.get("description") ?? "",
    weekday: formData.get("weekday") ?? "",
    time: formData.get("time") ?? "",
    minAge: formData.get("minAge") ?? "",
    maxAge: formData.get("maxAge") ?? "",
    maxParticipants: formData.get("maxParticipants") ?? "",
  };

  const result = createActivitySchema.safeParse(values);

  if (!result.success) {
    return {
      values,
      errors: z.flattenError(result.error).fieldErrors,
    };
  }

  const apiResult = await createActivityWithFormData(formData);
  if (apiResult.success) {
    redirect("/profile");
  }

  return {
    values,
    errors: { form: [apiResult.error || "Kunne ikke oprette hold."] },
  };
}
```

**Hvad gør den?**  
Håndterer hele oprettelsen af et nyt hold fra formular til database.

**forklaret:**

1. Læser alle felter fra `formData`
2. Validerer input med `createActivitySchema`
3. Hvis der er fejl returnerer felt-specifikke fejl til formularen
4. Hvis validering lykkes sender data til API’et
5. Ved succes `redirect("/profile")`
6. Ved fejl returnerer en generel fejlbesked

**Vigtigt:**  
Redirect sker på serversiden, så brugeren automatisk lander på en opdateret profilside uden ekstra client-logik.

### Kodeeksempel 3 – `secondline` / guard clause

[Gå til koden i projektet](../src/lib/secondline.js)

```javascript
// guard clause

"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function checkAccess() {
  const cookieStore = await cookies();
  if (!cookieStore.has("accessToken")) return redirect("/unauthorized");
}
```

**Hvad gør den?**  
Funktionen beskytter sider mod unauthorized adgang ved at tjekke for en accessToken-cookie på serversiden.

**forklaret:**

1. Læser cookies på serversiden.
2. Tjekker om accessToken findes.
3. Hvis ikke → redirect til /unauthorized.
4. Stopper resten af siden fra at køre, så uautoriserede brugere ikke får adgang.

- **Brug - eksempel Kald funktionen i starten af en server-side komponent**

[Gå til koden i projektet](<../src/app/(cookie)/profile/page.jsx>)

```javascript
import { checkAccess } from "@/lib/secondline";
import { getCurrentUser, getActivities } from "@/lib/dal";
import {
  ProfileHeader,
  UserProfileContent,
  InstructorProfileContent,
} from "@/components/profile";

export const metadata = {
  title: "Min profil",
  description: "Se din brugerprofil på Landrup Dans",
};

function formatActivityTime(activity) {
  if (activity.weekday && activity.time)
    return `${activity.weekday} kl. ${activity.time}`;
  if (activity.time) return activity.time;
  return "";
}

export default async function ProfilePage() {
  await checkAccess();
}
```

**Vigtigt:**

- Centraliseret adgangskontrol: Logikken er samlet ét sted (checkAccess()), så den kan genbruges på flere sider.

- Server-side sikkerhed: Tjekket sker på serveren, hvilket forhindrer, at uautoriserede brugere kan manipulere klienten for at få adgang.

- Automatisk redirect: Brugeren sendes direkte til /unauthorized, hvilket sikrer en bedre og mere konsistent brugeroplevelse.

- Fremtidssikret: Nem at ændre adgangsregler eller tilføje flere sikkerhedstjek uden at opdatere alle sider manuelt.

- Ekstra sikkerhed: Hjælper, hvis en proxy eller anden mellemserver bypasses eller ikke fungerer korrekt.

<!-- ## Perspektivering -->
