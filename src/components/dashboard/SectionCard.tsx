export const SectionCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow border">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
};
