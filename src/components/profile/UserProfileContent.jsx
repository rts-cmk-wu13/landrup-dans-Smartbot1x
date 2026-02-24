import RegisteredClassCard from "./RegisteredClassCard";

export default function UserProfileContent({ registeredClasses = [] }) {
  return (
    <section className="bg-background text-secondary px-6 py-6">
      <h2 className="text-xl font-medium mb-4">Tilmeldte hold</h2>
      <div className="flex flex-col gap-4">
        {registeredClasses.length === 0 ? (
          <p className="text-secondary/80 text-sm">
            Du er ikke tilmeldt nogen hold endnu.
          </p>
        ) : (
          registeredClasses.map((hold) => (
            <RegisteredClassCard
              key={hold.id}
              title={hold.title}
              time={hold.time}
              holdId={hold.id}
            />
          ))
        )}
      </div>
    </section>
  );
}
