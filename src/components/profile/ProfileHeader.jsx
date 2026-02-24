/* import { User } from "lucide-react"; */
import { FaUser } from "react-icons/fa";

export default function ProfileHeader({ name, role }) {
  const roleLabel = role === "instructor" ? "Instruktør" : "Medlem";

  return (
    <section className="bg-card-bg text-background px-6 py-8 flex flex-col items-center gap-4">
      <h1 className="text-2xl sm:text-3xl font-medium w-full text-background text-center">
        Min profil
      </h1>
      <div className="flex flex-col items-center gap-3">
        <div className="w-20 h-20 flex items-center justify-center">
          <FaUser className="size-64 text-background" />
        </div>
        <p className="font-medium text-background">{name}</p>
        <p className=" text-sm">{roleLabel}</p>
      </div>
    </section>
  );
}
